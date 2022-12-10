import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import profile from '../../assets/profile.svg'
import './DescriptionProfile.css'

export function DescriptionProfile(){
  return (
    <>
     <div id='container-description'>
      <div>
      <h1>Olá, eu sou <strong>Julia Jeske</strong></h1>
      <p>Desenvolvedora Front-end</p>
      </div>

    <img src={profile} />
    </div>
    <footer>
    <LinkedinLogo size={27} style={{cursor:"pointer"}}/>
    <InstagramLogo size={27} style={{cursor:"pointer"}} />
    <GithubLogo size={27}  style={{cursor:"pointer"}}/>
    </footer>
    </>
   
  )
}