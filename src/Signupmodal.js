import React, { useState } from 'react';
import Modal, { contextType } from 'react-modal';
import './Signupmodal.css';
const SignupModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender,setgender]=useState('');
  const [age,setage]=useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send signup data to a server)
    // Then close the modal
    onClose();
    const userdetail={name,email,password,gender,age}
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Correct header for sending JSON
      },
      body: JSON.stringify(userdetail),
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Signup Modal">
      <h2>Sign Up</h2>
      <div className='flex'>
      <form onSubmit={handleSubmit} className='labelinput'>
        <label>Name</label>
        <input className='labelinput' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input className='labelinput' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className='labelinput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>gender</label>
        <input className='labelinput'type="gender" placeholder="gender" value={gender} onChange={(e) => setgender(e.target.value)} />
        <label>age</label>
        <input className='labelinput' type="age" placeholder="age" value={age} onChange={(e) => setage(e.target.value)} />
        <button className="signupbutton"type="submit">Sign Up</button>
      </form>
      </div>
    </Modal>
  );
};

export default SignupModal;
