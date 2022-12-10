import './ListSkills.css'

interface ListProps {
  image: string,
  title:string
}

export function ListSkills(props:ListProps){
  return (
    <>
    <li>
      <img src={props.image}/>
      <h3>{props.title}</h3>
    </li>
    </>
  )
}