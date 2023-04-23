import { useState } from 'react'

const Form = (props) => {
  
  const [link, setLink] = useState({ name: "", url: "" });

  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
            const { name, value } = event.target;
            setLink((prevState) => ({ ...prevState, [name]: value }));
       
       
  }

  

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

            props.handleSubmit(link)
  }

  return (
    <form className="addNew" onSubmit={onFormSubmit}>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      
      <label for="name">
        Name:
        <input  type="text" name="name" value={link.name} onChange={handleChange}/>
      </label>
      
      <label for="Link">
        Link:
        <input name="url" value={link.url} type="url" onChange={handleChange}/>
      </label>
      
      <input type="submit" value="Add"/>

    </form>
  )
}

export default Form
