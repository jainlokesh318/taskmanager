import { useState } from "react"
import TaskForm from "./TaskForm";
import TasksListPreviewer from "./TasksListPreviewer"

export default function TaskManager() {
    let [tasksList, setTasksList] = useState([])
    let [taskToEdit, setTaskToEdit] = useState(undefined);

    const handleSubmit = (taskToAdd) => {
        if (taskToEdit) {
            setTasksList(prev => prev?.map(taskItem => {
                if (taskItem?.id === taskToAdd?.id) {
                    return taskToAdd
                } else {
                    return taskItem
                }
            }))
            setTaskToEdit(undefined)
        } else {
            setTasksList(prev => [...prev, taskToAdd])
        }
    }

    const handleDelete = (taskToDelete) => {
        setTasksList(prev => prev?.filter(task => task?.id !== taskToDelete?.id))
    }

    const handleEdit = (task) => {
        setTaskToEdit(task)
    }

    return (
        <>
            <TaskForm handleSubmit={handleSubmit} taskToEdit={taskToEdit} />
            <TasksListPreviewer tasksList={tasksList} handleDelete={handleDelete} handleEdit={handleEdit} />
        </>
    )
}