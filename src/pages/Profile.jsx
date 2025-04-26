import { useState, useEffect } from 'react';
import { auth, provider, db } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setEmail(currentUser.email);
        setRole(currentUser.displayName || 'User');  // Set default role
        setLoading(false);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      setEmail(user.email);
      setRole(user.displayName || 'User');
      setMessage('Logged in successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to log in.');
    }
  };

  // Google Sign-Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setMessage('Logged out successfully.');
    } catch (error) {
      console.error(error);
      setMessage('Failed to log out.');
    }
  };

  // Update user profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { email, role }, { merge: true });
      setMessage('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Failed to update profile.');
    }
  };

  // Show loading message if the user is not logged in
  if (loading) return <div className="p-8">Loading...</div>;

  // If the user is logged in, display their profile
  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">My Profile</h2>

      {message && <div className="mb-4 text-red-500">{message}</div>}

      {user ? (
        <>
          <div className="border p-4 rounded mb-6">
            <h3 className="font-bold">Email: {email}</h3>
            <p>Role: {role}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="p-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500"
            >
              Update Profile
            </button>
          </form>

          {/* Button to navigate to upload video page */}
          <button
            onClick={() => navigate('/upload-video')}
            className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500"
          >
            Go to Upload Video
          </button>

          {/* Sign-Out Button */}
          <button
            onClick={handleSignOut}
            className="mt-4 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default Profile;
