import React from 'react'

function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }

  return (
    <div onClick={handleRemove} className='text-center flex flex-col justify-center items-center space-y-4' >
        <h3>{repo.name}</h3>
        <img className='w-36 rounded-full mb-4' src={repo.owner.avatar_url} alt={repo.owner.login}/>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver repositorio</a> <br />
        <a href='#' rel='noreferrer' className='remover'>Remover</a>
        <hr />
    </div>
  )
}

export default ItemRepo