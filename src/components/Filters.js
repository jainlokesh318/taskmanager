import { statusOptions } from "./TaskForm";

export default function Filters({ handleFilterChange }) {
    return (
        <div className="flex gap-3" onChange={handleFilterChange}>
            {
                statusOptions.map(statusOption =>
                    <div key={statusOption.value}>
                        <input type="checkbox"
                            id={statusOption.value}
                            name="status"
                            value={statusOption.value}>
                        </input>
                        <label className="mx-1" htmlFor={statusOption.value} >{statusOption.label}</label>
                    </div>
                )
            }
        </div>)
}