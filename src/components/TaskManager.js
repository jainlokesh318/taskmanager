import { useState } from "react"
import TaskForm from "./TaskForm";

export default function TaskManager() {
    let [tasksList, setTasksList] = useState([])
    let [taskToEdit, setTaskToEdit] = useState(undefined);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form")
    }
    return <TaskForm handleFormSubmission={handleSubmit} />
}