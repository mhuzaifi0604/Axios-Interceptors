import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './Configuration';

initializeApp(firebaseConfig);

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [check, setcheck] = useState(false);
    const [instruction, setinstruction] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            const uid = user.uid;
            console.log('User authenticated with ID:', uid);
            setError('');
            setinstruction('Successfully SignedUp. Login To Access Dashboard!')
        } catch (error) {
            setError('SomeThing Went Wrong!');
        }
        console.log('email:', email);
        console.log('password:', password);
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="m-5 mt-0 p-6 w-4/5 border-2 border-blue-900 bg-[#170c27] backdrop-filter backdrop-blur-md shadow-lg shadow-teal-100 rounded-md">
                <div className='flex justify-center items-center'>
                    <h2 className="text-3xl mb-2 font-serif text-justify italic font-semibold text-white text-opacity-90" >Let's Sign You up!</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <h3 className="text-white block mb-5 font-serif italic">
                        Please enter your Credentials.
                    </h3>
                </div>
                <label htmlFor="email" className="block mb-6 text-white font-serif italic">
                    Email
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="border mt-2 border-blue-500 p-2 w-full rounded-md focus:outline-none focus:border-teal-500 bg-transparent text-white"
                    />
                </label>

                <label htmlFor="password" className="block mb-3 text-white font-serif italic">
                    Password
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="border mt-2 border-blue-500 p-2 w-full rounded-md focus:outline-none focus:border-teal-500 bg-transparent text-white"
                        autoComplete='new-password'
                    />
                </label>

                {!check && <p className="text-red-500 text-sm mb-3">{error}</p>}
                {!error && <p className="text-teal-500 text-sm mb-3">{instruction}</p>}

                <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition duration-300 mt-4"
                >
                    Sign Up
                </button>
                <p className='text-center'>
                    <a href="#!" className="text-teal-500 text-sm hover:underline">
                        Already have an account? Sign up
                    </a>
                </p>
            </form>
        </>
    )
}
export default SignUp;