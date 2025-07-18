import { netflix_background } from '../utils/data'
import Header from './Header'

function Login() {
  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src={netflix_background} alt="logo" />
      </div>
      <form className='my-24 mx-auto p-12 left-0 right-0 absolute w-3/12 bg-black/70 text-white rounded-lg'>
        <h1 className='font-bold text-2xl py-4'>Sign In</h1>
        <input type="email" placeholder='Email Address' className=' bg-gray-800 text-white rounded-lg p-4 my-2 w-full' />
        <input type="password" placeholder='Password' className='bg-gray-800 text-white rounded-lg p-4 my-2 w-full' />
        <button className='p-6 my-6 rounded-lg bg-red-600 w-full'>Sign In</button>
        <p className='py-4'> New to Netflix? Sign Up Now</p>
      </form>
    </div>
  )
}

export default Login
