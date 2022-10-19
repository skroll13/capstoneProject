import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Update from '../components/Update'

const Listened = () => {
  const [listenedPodcast, setListenedPodcast] = useState([])
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)


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

  const deletePodcast = id => {
    axios.delete(`api/v1/following/${id}`)
    setTriggerRefresh(!triggerRefresh)
    console.log(id)
  }

  return (
    <>
  
      {!listenedPodcast ? (
        <div>No podcasts to display</div>
      ) : (
        listenedPodcast.map(podcastObj => {
          return (
            <>
              <img key={podcastObj.id} src={podcastObj.image} alt='' /> 
              <button
                className='font-mono py-10 mt-16 btn btn-small btn-danger btn-block'
                onClick={() => deletePodcast(podcastObj.id)} >
                Delete Podcast
               </button>
               <button onClick={() => setIsUpdate(true)}
               className='font-mono py-20 mt-4 btn btn-lg btn-danger btn-block'
>
  Update
</button>


               
              {isUpdate ? <Update id={podcastObj.id} />
                
              : (
                ''
              )}
            </>
          )
        })
      )}
    </>
  )
}

export default Listened
