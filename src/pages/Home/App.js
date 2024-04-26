import GitLogo from '../../assets/github-logo.png'
import {Container} from '../styles'
import Input from '../../components/Input'; 
import Button from '../../components/Button'
import { useState } from 'react';
import { api } from '../../services/api';
import ItemRepo from '../../ItemRepo';



function App() {
  const [currentRepo, setCurrentRepo] = useState(''); 
  const [repos, setRepos] = useState([]); 


  const handleSearchRepo = async () => {
    try{
      const {data} = await api.get(`repos/${currentRepo}`)
      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id); 
        
        if(!isExist){
          setRepos(prev => [...prev, data]);
          setCurrentRepo(''); 
          return
        }
      }
    }catch(error){
      console.log("Erro que esta dando: ", error);
      console.log("O que esta digitado:", currentRepo); 
    }
    
  }

  const handleRemoveRepo = (id) => {
    const updateRepos = repos.filter(repo => repo.id !== id); 
    setRepos(updateRepos);
    console.log("Registro removido: ", id); 
  }

  return (
    <div className="App">
      <Container>
        <img src={GitLogo} width={72} height={72} alt='githubLogo' />
        <Input value={currentRepo} onChange={(e)=>setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
      </Container>
    </div>
  );
}

export default App;
