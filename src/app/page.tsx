'use client'
import { useRouter } from 'next/navigation';
import {useLogout} from './hooks/useLogout'


export default function App() {
  const router = useRouter();

  const {logout} = useLogout()
  const handleLoginRedirect = () => {
    // Redirect to the /login page
    router.push('/login');
  };
  const handleRegisterRedirect = () => {
    // Redirect to the /login page
    router.push('/signup');
  };

  return (

      <div>

        <div>
          <h1>Welcome to the Main Page</h1>
          <button onClick={handleLoginRedirect}>Go to Login</button>
          <button onClick={handleRegisterRedirect}>Go to Register</button>
        </div>
        <div>
          <h1>logout</h1>
          <button onClick={()=>logout()}>Logout</button>

        </div>
        {/* {router.pathname === '/' || router.pathname === '/margIN' ? (
          user ? <Home /> : <Hero />
        ) : null}
        {router.pathname === '/login' ? (!user ? <Login /> : router.push('/')) : null}
        {router.pathname === '/signup' ? (!user ? <Signup /> : router.push('/')) : null} */}

      </div>

  );
}