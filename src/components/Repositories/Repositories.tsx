import './Repositories.css'
import { useState, useEffect, useCallback } from "react";


export function Repositories(){
  const [repositories, setRepositories] = useState<any[]>([])
  const getGithubRepositories = useCallback(
    async () => {
      try {
        const data = await fetch('https://api.github.com/users/JuliaJeske/repos')
          .then(response => response.json())
        if(data.length) {
          setRepositories(data)
          return
        }
        throw new Error('No repositories')
      } catch(e) {
        console.log(e)
      }
    },
    []
  )
  useEffect(() => {
    getGithubRepositories()
  }, [])
  
  return (
    <div id='container-repo'>
      <h1>Projects</h1>
      <ul>
        {repositories.map(repository => {
          return (
            <li>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <a href={repository.url}>Ver</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}