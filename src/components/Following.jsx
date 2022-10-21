import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <>
    {
  isUpdate ? <Update id={podcastId} /> : ''
}

    <div className='m-20'>
      {!followedPodcast ? (
        <div>No podcasts to display</div>
      ) : 
      (
        followedPodcast.map(podcastObj => {
          return (
            <>
              <img key={podcastObj.id} src={podcastObj.image} alt='' />
              <figure>
                <figcaption>{podcastObj.podcastName}</figcaption>
                <audio controls src={podcastObj.audioLink}></audio>
              </figure>
             
             
              <button
                className='font-mono px-4 py-2 text-sm text-white duration-150 bg-red-600 rounded-md hover:bg-red-700 active:shadow-lg'
                onClick={() => deletePodcast(podcastObj.id)} >
                Delete 
              </button>
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
        </div>
    </>
  )
}

export default Following