import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewMovie() {
const[image,setImage]= useState("")
const[title,setTitle]= useState("")
const[overview,setOverview]= useState("")
const[genre,setGenre]= useState("")
const[reviews,setReviews]= useState("")

const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
           movie: { image, title, overview,genre,reviews }
        }
        fetch("http://localhost:9294/movies/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(movie => {
                navigate(`/mylist/${movie.id}`)
            })
    }
    
    
    return (
        <section className='App d-flex flex-column align-items-center' id="form">
            <h1>Add New Show</h1>
            <Form style={{ width: '300px' }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                <Form.Label htmlFor="title">Title:</Form.Label>
                <Form.Control type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                <Form.Label htmlFor="image">Image:</Form.Label>
                <Form.Control type="text" id="image" value={image} onChange={e => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                <Form.Label htmlFor="overview">Overview:</Form.Label>
                <Form.Control type="text" id="overview" value={overview} onChange={e => setOverview(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                <Form.Label htmlFor="reviews">Reviews:</Form.Label>
                <Form.Control type="text" id="reviews" value={reviews} onChange={e => setReviews(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                <Form.Label htmlFor="genre">Genre:</Form.Label>
                <Form.Control type="text" id="genre" value={genre} onChange={e => setGenre(e.target.value)} />
                </Form.Group>
                
                <Button type="submit">Submit</Button>
            </Form>
        </section>
    )
}

export default NewMovie