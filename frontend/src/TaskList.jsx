import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3425/routes/');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
 
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3425/routes/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }; 
  const editTask = async(id)=>{
    navigate(`/edit/${id}`)
  }    
     
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/create"><button>Create Task</button></Link>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map(task => (
          <div key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            
            <button onClick={() => editTask(task._id)}>edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
