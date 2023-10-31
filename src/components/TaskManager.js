import { useState } from "react"
import TaskForm from "./TaskForm";

export default function TaskManager() {
    let [tasksList, setTasksList] = useState([])
    let [taskToEdit, setTaskToEdit] = useState(undefined);
    const handleSubmit = (task) => {
        setTasksList(prev => [...prev, task])
    }
    return <TaskForm handleFormSubmission={handleSubmit} />
}