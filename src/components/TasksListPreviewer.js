import { useState } from "react"
import Filters from "./Filters"
import RenderIf from "./RenderIf"

function MatchNotFound() {
    return <h1 className="text-2xl">Match Not Found</h1>
}

function TaskItem({ task, handleDelete, handleEdit }) {

    let statusColor;
    switch (task.status) {
        case "Todo": statusColor = "text-blue-500"
            break
        case "In-Progress": statusColor = "text-green-500"
            break
        case "Done": statusColor = "text-purple-500"
            break
    }

    return (
        <div className="grid grid-cols-3 justify-between gap-2 border shadow w-full md:w-1/2 p-4 my-2">
            <div className="col-span-2">
                <h2 className="text-2xl">{task?.title}</h2>
                <p className="break-words">{task?.description}</p>
            </div>
            <div className="flex flex-col gap-4">
                <button className="border rounded px-4 bg-orange-300" onClick={_ => handleEdit(task)}>Update</button>
                <button className="border rounded px-4 bg-red-300" onClick={_ => handleDelete(task)}>Delete</button>
                <span className={`${statusColor}`}>{task?.status}</span>
            </div>
        </div>
    )
}

export default function TasksListPreviewer({ tasksList, handleDelete, handleEdit }) {
    let [filters, setFilters] = useState({ status: [] })

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
        <div className="col-span-2 flex flex-col items-center flex-1">
            <h1 className="text-2xl my-3">Tasks List</h1>
            <Filters handleFilterChange={handleFilterChange} />
            <RenderIf condition={filteredItems.length > 0} elseRender={<MatchNotFound />}>
                {
                    filteredItems?.map(task => {
                        return <TaskItem task={task} key={task?.id}
                            handleDelete={handleDelete} handleEdit={handleEdit}
                        />
                    })
                }
            </RenderIf>
        </div>
    )
}