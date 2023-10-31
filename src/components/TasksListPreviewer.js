import { useState } from "react"

function TaskItem({ task, handleDelete }) {
    return (
        <div className="flex justify-between border shadow w-full p-4 m-4">
            <div>
                <h2 className="text-2xl">{task?.title}</h2>
                <p>{task?.description}</p>
            </div>
            <div className="flex flex-col gap-4">
                <button className="border rounded px-4 bg-orange-300">Update</button>
                <button className="border rounded px-4 bg-red-300" onClick={_ => handleDelete(task)}>Delete</button>
            </div>
        </div>
    )
}

export default function TasksListPreviewer({ tasksList, handleDelete }) {

    return (
        <div>
            {
                tasksList?.map(task => {
                    return <TaskItem task={task} key={task?.id} handleDelete={handleDelete} />
                })
            }
        </div>
    )
}