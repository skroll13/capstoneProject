import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Following = () => {
  const [followedPodcast, setFollowedPodcast] = useState([])

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
  }, [])

  console.log(followedPodcast)

  return (
    <>
      {!followedPodcast ? (
        <div>No podcasts to display</div>
      ) : (
        followedPodcast.map(podcastObj => {
          return (
            <>
              <img key={podcastObj.id} src={podcastObj.image} alt='' />{' '}
            </>
          )
        })
      )}
    </>
  )
}

export default Following
