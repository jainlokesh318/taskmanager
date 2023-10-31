import { useState } from "react"

function TextInput({ type, id, value, setValue, placeholder }) {
    return <input className="border p-2" type={type} id={id} value={value} onChange={setValue} placeholder={placeholder} />
}

export default function TaskForm({ handleFormSubmission }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")

    const isFormDisabled = title.length > 0 && description.length > 0

    return <form onSubmit={handleFormSubmission}>
        <div className="grid grid-cols-2">
            <label htmlFor="title">Title</label>
            <TextInput type="text" id="title" value={title} placeholder="Enter title" setValue={e => setTitle(e.target.value)} />

        </div>
        <div className="grid grid-cols-2">
            <label htmlFor="title">Description</label>
            <TextInput type="text" value={description} placeholder="Enter Description" setValue={e => setDescription(e.target.value)} />
        </div>
        <button disabled={true} type="submit" className="border rounded px-4">Add</button>
    </form>
}