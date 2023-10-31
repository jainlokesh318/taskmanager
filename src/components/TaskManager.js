import { useState } from "react"
import TaskForm from "./TaskForm";
import TasksListPreviewer from "./TasksListPreviewer"

export default function TaskManager() {
    let [tasksList, setTasksList] = useState([])
    let [taskToEdit, setTaskToEdit] = useState(undefined);

    const handleSubmit = (task) => {
        setTasksList(prev => [...prev, task])
    }

    const handleDelete = (taskToDelete) => {
        setTasksList(prev => prev?.filter(task => task?.id !== taskToDelete?.id))
    }

    return (
        <>
            <TaskForm handleSubmit={handleSubmit} taskToEdit={taskToEdit} />
            <TasksListPreviewer tasksList={tasksList} handleDelete={handleDelete} />
        </>
    )
}