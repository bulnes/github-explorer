import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/bulnes'
}

export default function Repositorylist() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  useEffect(() => console.log(repositories), [repositories])

  return (
    <section className="repository-list">
      <h1>Lista de repsitórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}