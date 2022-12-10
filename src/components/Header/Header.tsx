import logo from '../../assets/logo.svg'
import './Header.css'

export function Header(){
  return (
    <header>
      <img src={logo}/>

      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    
    </header>

  )
}