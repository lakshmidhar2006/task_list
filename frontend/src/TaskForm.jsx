import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    if (id) {
      const fetchTask = async () => {
        try {
          const response = await axios.get(`http://localhost:3425/routes/${id}`);
          const { title, description, dueDate } = response.data;
          setTitle(title);
          setDescription(description);
          setDueDate(dueDate);
        } catch (error) {
          console.error('Error fetching task:', error);
        }
      };
      fetchTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      if (id) {
        await axios.put(`http://localhost:3425/routes/${id}`, { title, description, dueDate });
      } else {
        await axios.post('http://localhost:3425/routes/', { title, description, dueDate });
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">{id ? 'Update' : 'Create'} Task</button>
    </form>
  );
};

export default TaskForm;
