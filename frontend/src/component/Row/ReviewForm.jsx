import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import React,{useState} from 'react'

function ReviewForm({id}){
  const handleSubmit=e=>{
    e.preventDefault()

    console.log(e.target.comment.value)
    fetch('http://localhost:9292/users', {
              method: 'POST',
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json" 
            },
              body: JSON.stringify({name: e.target.name.value})
            })
            .then(r => r.json())
            .then((data) => {
              fetch("http://localhost:9292/reviews/", {
                  method: "POST",
                  headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    ratings: e.target.ratings.value,
                    comment: e.target.comment.value,
                    movie_id: id,
                    viewer_id: data.id
                  })
              })
                  .then(r => r.json())
                  .then(data => console.log(data))
          })
  }

    return(
    <div className='App d-flex flex-column align-items-center'>
        <h1>How was the show?</h1>
        <Form onSubmit={handleSubmit} style={{ width: '300px' ,color: "white"}}>
        <Form.Group>
            <Form.Label htmlFor='name'>Name:</Form.Label>
            <Form.Control 
            id='name' 
            type='text' 
            name = 'name'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='ratings'>Rating</Form.Label>
            <Form.Control 
            id='ratings' 
            type='number' 
            name = 'ratings'
            // value={rating} 
            // onChange={e => setRating(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='comment'>Comments</Form.Label>
            <Form.Control 
            id='comment' 
            as='textarea' 
            placeholder='Leave a comment' 
            name='comment'
            // value={comment} 
            // onChange={e => setComment(e.target.value)}
            />
          </Form.Group>
          <Button type='submit'>Submit Review</Button>
        </Form>
    </div>
    )
}

export default ReviewForm