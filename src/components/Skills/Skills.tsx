import html5 from '../../assets/html5.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import bootstrap from '../../assets/bootstrap.svg'
import figma from '../../assets/figma.svg'
import { ListSkills } from '../ListSkills/ListSkills'
import './Skills.css'




export function Skills(props:any) {
  return (
    <div id='container-skills'>
    <h1>Skills</h1>
    <ul>
    <ListSkills image={html5} title={'HTML 5'} />
    <ListSkills image={javascript} title={'Javascript'} />
    <ListSkills image={css} title={'CSS 3'} />
    <ListSkills image={react} title={'React Js'} />
    <ListSkills image={bootstrap} title={'Bootstrap'} />
    </ul>
    <hr/>
    <div id='figma-template'>
      <ListSkills image={figma} title={'Figma'} />
    </div>
    
    </div>
  )
}