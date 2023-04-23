import { useState } from 'react'
 import Table from './Table';
 import Form from './Form';

const LinkContainer = (props) => {

  const [favLink, setFavlink] = useState([]);
  

  
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            const updatedfavLink = [...favLink];
            updatedfavLink.splice(index, 1);
            setFavlink(updatedfavLink);

       
  }

  const handleSubmit = (onFormSubmit) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
            const newFavlink = [...favLink];
            newFavlink.push(onFormSubmit);
            setFavlink(newFavlink);
            
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {<Table removeLink={handleRemove} linkData={favLink}/>}

      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form handleSubmit={handleSubmit}/>
      
    </div>
  )
}

export default LinkContainer
