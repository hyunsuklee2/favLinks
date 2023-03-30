import { useEffect, useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {

  const [favLinks, setFavLinks] = useState([]) 

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       setFavLinks(favLinks.splice(index,1))  //???
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
        setFavLinks(favLinks => favLinks.concat(favLink)) //????
       
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}

      <Table removeLink = {handleRemove} 
            linkData = {favLinks}/>

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}

      <Form addLink = {handleSubmit}/>

    </div>
  )
}

export default LinkContainer
