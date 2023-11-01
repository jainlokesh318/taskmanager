export function TextInput({ type, id, value, setValue, placeholder }) {
    return (
        <div className="grid grid-cols-2">
            <label htmlFor={id}>{id.toUpperCase()}</label>
            {
                type === "textarea" ?
                    <textarea className="border p-2 resize-none" type={type}
                        id={id} value={value} onChange={setValue} placeholder={placeholder}
                    />
                    :
                    <input className="border p-2" type={type}
                        id={id} value={value} onChange={setValue} placeholder={placeholder}
                    />
            }
        </div>
    )
}