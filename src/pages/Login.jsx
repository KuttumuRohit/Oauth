import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';


function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/profile');
      }
    });
  }, [auth, navigate]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/profile');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Sign in with Google
        </button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?
          <a href="/signup" className="text-green-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
