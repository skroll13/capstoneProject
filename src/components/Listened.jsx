import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Listened = () => {
  const [listenedPodcast, setListenedPodcast] = useState([])

  useEffect(() => {
    const heardPodcast = async () => {
      try {
        let response = await axios.get('api/v1/listened', {
          headers: { authorization: localStorage.token }
        })
        // let result = await response.json()
        setListenedPodcast(response.data)
        console.log(listenedPodcast)
      } catch (error) {
        console.log(error)
      }
    }
    heardPodcast()
  }, [])

  console.log(listenedPodcast)

  return (
    <>
      {!listenedPodcast ? (
        <div>No podcasts to display</div>
      ) : (
        listenedPodcast.map(podcastObj => {
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

export default Listened
