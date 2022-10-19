import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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

  const deletePodcast = id => {
    axios.delete(`api/v1/following/${id}`)
    setTriggerRefresh(!triggerRefresh)
    console.log(id)
  }
  const UpdateNotes = id => {
    axios.update(`api/v1/following/${id}`)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()

      dispatch(UpdateNotes)
    }
    // setTriggerRefresh(!triggerRefresh)
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
              <br />
              <img key={podcastObj.id} src={podcastObj.image} alt='' />
              <button
                className='font-mono py-10 mt-16 btn btn-small btn-danger btn-block'
                onClick={() => deletePodcast(podcastObj.id)}
              >
                Delete Podcast
              </button>{' '}
              <button
                className='font-mono py-10 mt-16 btn btn-small btn-danger btn-block'
                onClick={() => updateNotes(podcastObj.id)}
              >
                Update Notes
              </button>
            </>
          )
        })
      )}
    </>
  )
}

export default Following
