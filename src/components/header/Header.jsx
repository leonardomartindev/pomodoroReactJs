import Logo from '../../assets/Logo.svg'
import './index.css'
export default function Header() {
  return (
    <>
      <div className='container'>
        <img className='logo' src={Logo} alt="" />
      </div>
    </>
  )
}
