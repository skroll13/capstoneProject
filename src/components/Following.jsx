import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import Update from './UpdateFollowing'


const Following = () => {
  const [followedPodcast, setFollowedPodcast] = useState([])
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  
const [podcastId, setPodcastId] = useState("")
  useEffect(() => {
    const followPodcast = async () => {
      try {
        let response = await axios.get('api/v1/following', {
          headers: { authorization: `bearer ${localStorage.token}` }
        })
        // let result = await response.json()
        setFollowedPodcast(response.data)
        console.log(followedPodcast)
      } catch (error) {
      
        console.log(error)
        
      }
    }
    followPodcast()
    // eslint-disable-next-line
  }, [triggerRefresh])

  console.log(followedPodcast)

  const deletePodcast = id => {
    axios.delete(`api/v1/following/${id}`)
    setTriggerRefresh(!triggerRefresh)
    console.log(id)
  }

const handleUpdate = (id) => {
  setPodcastId(id)
  console.log(id)
  console.log(podcastId);
  setIsUpdate(true)
}
  return (
    <Container className='mainFont'>
      <h1>Podcasts You're Following</h1>
    {
      isUpdate ? <Update id={podcastId} /> : ''
    }

    
      {!followedPodcast ? (
        <div>No podcasts to display</div>
      ) : 
      (
        followedPodcast.map(podcastObj => {
          return (
            
            <>
            
            <br />
              <figcaption>{podcastObj.podcastName}</figcaption>
              <img key={podcastObj.id} src={podcastObj.image} alt='' />
              <figure>
                <audio controls src={podcastObj.audioLink}></audio>
              </figure>
             
             
              <Button
                variant='danger'
                className='mainFont'
                onClick={() => deletePodcast(podcastObj.id)} >
                Delete 
              </Button>
              <br />
              {" "}
              
              {/* <button className='font-mono px-4 py-2 text-sm text-white duration-150 bg-red-600 rounded-md hover:bg-red-700 active:shadow-l'
                onClick={() => handleUpdate(podcastObj.id)}>
                Update 
              </button> */}
              
              {/* <p>{podcastObj.notes}</p> */}

            
            </>
          )
        })
        )}
    </Container>
  )
}

export default Following