import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [role, setRole] = useState('learner'); // learner or teacher
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        navigate('/profile');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <select value={role} onChange={e => setRole(e.target.value)} className="border p-2">
          <option value="learner">Learner</option>
          <option value="teacher">Teacher</option>
        </select>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2" required />
        <button type="submit" className="bg-green-500 text-white py-2">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
