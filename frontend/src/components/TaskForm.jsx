import { useState } from "react";
import axios from "axios";
export default function TaskForm() {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const taskData = { title, dueDate, priority, status };
axio
        try {
            const response = await axios.post("http://localhost:3000/post",taskData);
            const data = await response.json();
            console.log(data);
            setTitle("");
            setDueDate("");
            setPriority("");
            setStatus("");

        } catch (error) {
            console.error( error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Title: <input type="text"
                 value={title}
                  onChange={(e) => setTitle(e.target.value)} required /></p>
                <p>Due Date: <input type="date"
                 value={dueDate} 
                 onChange={(e) => setDueDate(e.target.value)} required /></p>
                <p>Priority: <input type="text"
                 value={priority}
                  onChange={(e) => setPriority(e.target.value)} required /></p>
                <p>Status: <input type="text"
                 value={status}
                  onChange={(e) => setStatus(e.target.value)} required /></p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
