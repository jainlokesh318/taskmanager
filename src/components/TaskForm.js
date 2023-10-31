import { useState } from "react"
import { v4 as uuid } from 'uuid';

function TextInput({ type, id, value, setValue, placeholder }) {
    return <input className="border p-2" type={type} id={id} value={value} onChange={setValue} placeholder={placeholder} />
}

export default function TaskForm({ handleSubmit, taskToEdit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const areFieldsPopulated = title.length > 0 && description.length > 0

    const handleFormSubmission = (e) => {
        e.preventDefault();
        const task = {
            id: uuid(),
            title, description, status
        }
        handleSubmit(task);
    }

    return (
        <form onSubmit={handleFormSubmission} className="flex flex-col gap-4 m-2">
            <div className="grid grid-cols-2">
                <label htmlFor="title">Title</label>
                <TextInput type="text" id="title" value={title} placeholder="Enter title" setValue={e => setTitle(e.target.value)} />

            </div>
            <div className="grid grid-cols-2">
                <label htmlFor="title">Description</label>
                <TextInput type="text" value={description} placeholder="Enter Description" setValue={e => setDescription(e.target.value)} />
            </div>
            <button disabled={!areFieldsPopulated} type="submit" className="border rounded px-4 disabled:opacity-50 disabled:cursor-not-allowed bg-orange-300">Add Task</button>
        </form>
    )
}