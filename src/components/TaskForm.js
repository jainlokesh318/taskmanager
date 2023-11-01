import { useEffect, useState } from "react"
import { v4 as uuid } from 'uuid';
import { TextInput } from "./Input";

export const statusOptions = [{
    label: "Todo",
    value: "Todo"
},
{
    label: "In-Progress",
    value: "In-Progress"
},
{
    label: "Done",
    value: "Done"
}
]

export default function TaskForm({ handleSubmit, taskToEdit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const areFieldsPopulated = title.length > 0 && description.length > 0 && status.length > 0

    const resetForm = () => {
        setTitle("")
        setDescription("")
        setStatus("")
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        const taskToAdd = {
            id: taskToEdit ? taskToEdit?.id : uuid(),
            title, description, status
        }
        handleSubmit(taskToAdd);
        resetForm();
    }

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit?.title)
            setDescription(taskToEdit?.description)
            setStatus(taskToEdit?.status)
        }
    }, [taskToEdit])

    return (
        <form onSubmit={handleFormSubmission} className="flex items-center justify-center flex-col gap-4 p-2 border-gray-500 border-dashed border">
            <TextInput
                type="text"
                id="title"
                value={title}
                placeholder="Enter title"
                setValue={e => setTitle(e.target.value)}
            />
            <TextInput
                type="textarea"
                id="description"
                value={description}
                placeholder="Enter Description"
                setValue={e => setDescription(e.target.value)}
            />
            <div>
                <label htmlFor="status">Status</label>
                <div className="flex justify-between">
                    {
                        statusOptions.map((statusOption) =>
                            <div key={statusOption.value}>
                                <input
                                    type="radio"
                                    checked={status === statusOption.value}
                                    value={statusOption.value}
                                    id={statusOption.label}
                                    name="status"
                                    onChange={e => setStatus(e.target.value)}
                                />
                                <label className="mx-2" htmlFor={statusOption.label}>{statusOption.label}</label>
                            </div>)
                    }
                </div>
            </div>
            <button disabled={!areFieldsPopulated} type="submit" className="border rounded px-4 disabled:opacity-50 disabled:cursor-not-allowed bg-orange-300">{`${taskToEdit ? "Update" : "Add"} Task`}</button>
        </form>
    )
}