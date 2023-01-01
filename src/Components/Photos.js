import React, { useEffect, useState } from 'react'
import {Card,Container, Col,Row} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Photos() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://picsum.photos/v2/list")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])

  return (
     <>
        <Container>
       
            <Row>
            {data.map((photo)=>(
                    <Col key={photo.id}>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={photo.download_url} />
                            <Card.Body>

                            <a href={photo.url}
                              className='btn btn-dark btn-sm'
                              style={{margin:"0 5px"}}>View details</a>

                              <Link to={`/photo/${photo.id}`}
                              className='btn btn-dark btn-sm'
                              style={{margin:"0 5px"}}>View Enlarge</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    
              ))}
            </Row>
               
        </Container>

    </>
  )
}

export default Photos