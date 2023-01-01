import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Photo=() =>{

    const[datas,setDatas]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`https://picsum.photos/id/${id}/info`)
        .then((res)=>setDatas(res.data))
        .catch((err)=>console.log((err)))
    },[id])

  return (
    <Container>
        <img src={datas.download_url}
        alt ="enlarge"
        style={{
            heigth:"100px",
            width:"100%"
        }
        }
        />
    </Container>

  )
}

export default Photo