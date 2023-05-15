import { useEffect, useState } from 'react'
 import Table from './Table';
 import Form from './Form';

const LinkContainer = (props) => {
  const fetchLinks = async () => {
    try{
      let response = await fetch('/links')
      console.log(response)
      let data = await response.json()
     // setFavlink(data)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const postLink = async () => {
    let testLink = {
      name: "Test",
      url: "test.com"
    }

    try {
      let response = await fetch('/new', {
        methods: 'POST',
        headers: {
          'Content type': 'application/json'
        },
        body: JSON.stringify(testLink)
      })
      console.log(response)
      let message = await response.text()
      console.log(message)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLinks()
    postLink()
  }, [])


  const [favLink, setFavlink] = useState([]);
  

  
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            const updatedfavLink = [...favLink];
            updatedfavLink.splice(index, 1);
            setFavlink(updatedfavLink);

            postLink(favLink)
            fetchLinks()

       
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
