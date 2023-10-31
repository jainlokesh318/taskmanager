import { useState } from "react"

function TaskItem({ task }) {
    return (
        <div className="flex justify-between">
            <div>
                <h2>{task?.title}</h2>
                <p>{task?.description}</p>
            </div>
            <div>
                <button className="border rounded px-4 bg-orange-300">Update</button>
            </div>
        </div>
    )
}

export default function TasksListPreviewer({ tasksList }) {
    console.log("updated Tasks List", tasksList)
    return (
        <div>
            {
                tasksList?.map(task => {
                    return <TaskItem task={task} key={task?.id} />
                })
            }
        </div>
    )
}