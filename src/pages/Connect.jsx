import { useState, useEffect } from 'react';

function Connect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPeers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/users/peers', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPeers();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Connect with Peers</h2>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user._id} className="border p-4 rounded">
            <h3 className="font-bold">{user.email}</h3>
            <p>Role: {user.role}</p>
            <button className="bg-green-500 text-white mt-2 px-3 py-1">Connect</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Connect;
