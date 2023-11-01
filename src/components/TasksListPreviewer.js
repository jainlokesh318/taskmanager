import { useState } from "react"
import Filters from "./Filters"

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

    const filteredItems = tasksList.filter(item => {
        if (filters.status.length === 0) {
            // If no status checkboxes are selected, return all items
            return true;
        } else {
            // Filter items based on selected status checkboxes
            return filters.status.includes(item.status);
        }
    });

    return (
        <>
            <Filters handleFilterChange={handleFilterChange} />
            {
                filteredItems?.map(task => {
                    return <TaskItem task={task} key={task?.id} handleDelete={handleDelete} handleEdit={handleEdit} />
                })
            }
        </>
    )
}