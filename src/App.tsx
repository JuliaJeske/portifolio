import { DescriptionProfile } from "./components/DescriptionProfile/DescriptionProfile";
import html5 from './assets/html5.svg'
import { Header } from "./components/Header/Header";
import { ListSkills } from "./components/ListSkills/ListSkills";
import { Skills } from "./components/Skills/Skills";
import './global.css'
import { Repositories } from "./components/Repositories/Repositories";




export function App() {
 
  
 return (
    <>
    <Header />
    <DescriptionProfile />
    <Skills>
      <ListSkills image={html5} title={"HTML 5"} />
    </Skills>
    <Repositories />
    </>
  )
}


