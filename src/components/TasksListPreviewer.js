import { useState } from "react"
import { statusOptions } from "./TaskForm"

function TaskItem({ task, handleDelete, handleEdit }) {
    return (
        <div className="flex justify-between border shadow w-1/2 p-4 my-2">
            <div>
                <h2 className="text-2xl">{task?.title}</h2>
                <p>{task?.description}</p>
            </div>
            <div className="flex flex-col gap-4">
                <button className="border rounded px-4 bg-orange-300" onClick={_ => handleEdit(task)}>Update</button>
                <button className="border rounded px-4 bg-red-300" onClick={_ => handleDelete(task)}>Delete</button>
                <span>{task?.status}</span>
            </div>
        </div>
    )
}

export default function TasksListPreviewer({ tasksList, handleDelete, handleEdit }) {
    let [filteredTasks, setFilteredTasks] = useState([])
    let [filters, setFilters] = useState({ status: [] })

    console.log({ filters })

    const handleFilterChange = (e) => {
        const { value, checked, name, type } = e.target

        if (type === "checkbox") {
            const updatedValue = checked
                ? [...filters[name], value]
                : filters[name].filter((item) => item !== value);

            setFilters(prev => {
                return {
                    ...prev,
                    [name]: updatedValue,
                }
            });
        } else {
            setFilters(prev => {
                return { ...prev, [name]: value }
            })
        }
    }

    return (
        <>
            <div className="flex gap-3" onChange={handleFilterChange}>
                {
                    statusOptions.map(statusOption =>
                        <div key={statusOption.value}>
                            <input type="checkbox" id={statusOption.value} name="status" value={statusOption.value}></input>
                            <label className="mx-1" htmlFor={statusOption.value} >{statusOption.label}</label>
                        </div>
                    )
                }
            </div>
            {
                tasksList?.map(task => {
                    return <TaskItem task={task} key={task?.id} handleDelete={handleDelete} handleEdit={handleEdit} />
                })
            }
        </>
    )
}