import {netflix_logo} from '../utils/data'

function Header() {
  return (
    <div className='z-10 absolute px-8 py-2 bg-gradient-to-b from-black '>
      <img src={netflix_logo} alt="logo" className='w-40'/>
    </div>
  )
}

export default Header;
