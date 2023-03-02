import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React,{useState} from 'react'

function Review(){
    const [ formData, setFormData] = useState({
      name: "",
      rating: 0,
      textarea:""
    })

    const handleSubmit = e => {
        e.preventDefault()
    }
    
    function handleChange(e){
      const key = e.target.id
      setFormData({
        ...formData,
       [key]:e.target.value
      })
    }

    return(
    <div className='App d-flex flex-column align-items-center'>
        <h1>How was the show?</h1>
        <Form style={{ width: '300px' }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='name'>Name</Form.Label>
            <Form.Control 
            id='name' 
            type='text' 
            value={formData.name} 
            onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='rating'>Rating</Form.Label>
            <Form.Control 
            id='rating' 
            type='number' 
            value={formData.rating} 
            onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='textarea'>Comments</Form.Label>
            <Form.Control 
            id='textarea' 
            as='textarea' 
            placeholder='Leave a comment' 
            value={formData.textarea} 
            onChange={handleChange}
            />
          </Form.Group>
          <Button type='submit'>Submit Review</Button>
        </Form>
    </div>
    )
}

export default Review