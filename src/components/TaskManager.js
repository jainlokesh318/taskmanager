import { useEffect, useState } from "react"
import TaskForm from "./TaskForm";
import TasksListPreviewer from "./TasksListPreviewer"
import { addTaskToDB, deleteTaskFromDB, fetchTasksFromDB, updateTaskToDB } from "../services/TaskManagerAPIUtils";
import RenderIf from "./RenderIf";

export default function TaskManager() {
    let [tasksList, setTasksList] = useState([])
    let [taskToEdit, setTaskToEdit] = useState(undefined);

    useEffect(() => {
        const unsubscribe = fetchTasksFromDB(setTasksList);
        return unsubscribe
    }, [])

    const handleSubmit = (taskToAdd) => {
        if (taskToEdit) {
            setTasksList(prev => prev?.map(taskItem => {
                if (taskItem?.id === taskToAdd?.id) {
                    updateTaskToDB(taskToAdd)
                    return taskToAdd
                } else {
                    return taskItem
                }
            }))
            setTaskToEdit(undefined)
        } else {
            addTaskToDB(taskToAdd)
            setTasksList(prev => [...prev, taskToAdd])
        }
    }

    const handleDelete = (taskToDelete) => {
        deleteTaskFromDB(taskToDelete);
        setTasksList(prev => prev?.filter(task => task?.id !== taskToDelete?.id))
    }

    const handleEdit = (task) => {
        setTaskToEdit(task)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center m-2">
            <TaskForm handleSubmit={handleSubmit} taskToEdit={taskToEdit} />
            <RenderIf condition={tasksList.length > 0}>
                <TasksListPreviewer tasksList={tasksList} handleDelete={handleDelete} handleEdit={handleEdit} />
            </RenderIf>
        </div>
    )
}