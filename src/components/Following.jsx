import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Following = () => {
  const [followedPodcast, setFollowedPodcast] = useState([])
  const [triggerRefresh, setTriggerRefresh] = useState(false)

  useEffect(() => {
    const followPodcast = async () => {
      try {
        let response = await axios.get('api/v1/following', {
          headers: { authorization: localStorage.token }
        })
        // let result = await response.json()
        setFollowedPodcast(response.data)
        console.log(followedPodcast)
      } catch (error) {
        console.log(error)
      }
    }
    followPodcast()
  }, [triggerRefresh])

  console.log(followedPodcast)
    
    const deletePodcast = (id) => {
      axios.delete(`api/v1/following/${id}`)
      setTriggerRefresh(!triggerRefresh)
      console.log(id)
    } 
  return (
    <>
      {!followedPodcast ? (
        <div>No podcasts to display</div>
      ) : (
        followedPodcast.map(podcastObj => {
          return (
            <>
              <img key={podcastObj.id} src={podcastObj.image} alt='' />{' '}
              <button onClick={() => deletePodcast(podcastObj.id)}>Delete Podcast</button>

             
             
              
            </>
          )
        })
      )}
    </>
  )
}

export default Following
