import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBook() {
  const [formData, setFormData] = useState({
    bookname: '',
    authorname: '',
    imageurl: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/books', formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="bookname" value={formData.bookname} onChange={handleChange} placeholder="Book Name" required />
      <input name="authorname" value={formData.authorname} onChange={handleChange} placeholder="Author Name" required />
      <input name="imageurl" value={formData.imageurl} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateBook;
