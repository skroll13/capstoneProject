import React, { useState } from 'react'
import axios from 'axios'

const { Client } = require('podcast-api')

const SearchPodcast = () => {
  const [searchInput, setSearchInput] = useState()
  const [searchResults, setSearchResults] = useState([])

  // const dispatch = useDispatch() //initializing hook

  const saveToFollowing = podcastObj => {
    let newPodcast = {
      episodeName: podcastObj.podcast.title_original,
      podcastName: podcastObj.podcast.title_original,
      image: podcastObj.image,
      audioLink: podcastObj.audio,
      wantToFollow: true,
      listenedTo: false,
      notes: podcastObj.description_original
    }
    axios.post('/api/v1/following/', newPodcast, {
      headers: { authorization: `bearer ${localStorage.token}` }
    })
    console.log(newPodcast)
    // dispatch(addToFollowing(podcastObj)) //lowercase -> action   CAP -> type
  }
  const saveToListened = podcastObj => {
    let newPodcast = {
      episodeName: podcastObj.podcast.title_original,
      podcastName: podcastObj.podcast.title_original,
      image: podcastObj.image,
      audioLink: podcastObj.audio,
      wantToFollow: true,
      listenedTo: false,
      notes: podcastObj.description_original
    }
    axios.post('/api/v1/listened', newPodcast, {
      headers: { authorization: `bearer ${localStorage.token}` }
    })
    console.log(newPodcast)
  }
  const handleInput = () => {
    const client = Client({ apiKey: '5631722333164e85ba9baaa0c517ca49' })
    client
      .search({
        q: searchInput,
        sort_by_date: 0,
        type: 'episode'
      })
      .then(response => {
        // Get response json data here
        console.log(response.data)
        setSearchResults(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    console.log(searchInput)
  }

  return (
    <>
   
    <div className='background-color: bg-red-400' variant='light' m-10>
        
          {/* Search Input goes here */}
          <input className='text-black-800'onChange={e => setSearchInput(e.target.value)} type='text' placeholder='Podcast or Episode' />
          <button
           className='rounded border border-red-700 bg-red-500 py-1 px-3 font-bold text-white hover:bg-red-700' onClick={handleInput} type='submit'>
            Search
          </button>

        {/* Search results are returned, if no data is returned an empty div is created */}
        {!searchResults ? (
          <div></div>
        ) : (
          
          searchResults.map(podcastObj => {
          {/* If data is returned, then the data is rendered one at a time  */}
            return (
              <>
                {/* Mapping() through the array of objects (podcast data returned) */}
                <img src={podcastObj.image} alt='' />

                <div class='btn-group mr-2' role='group' aria-label='Basic example'>

                  {/* Button to 'save to following' */}
                   <button type='button' className='btn btn-outline-danger btn-small' onClick={() => saveToFollowing(podcastObj)}>
                     Save to Following
                   </button>

                  {/* Button to 'save to Listened' */}
                  <button type='button' className='btn btn-outline-danger btn-small' onClick={() => saveToListened(podcastObj)}>
                     Save to Listened
                  </button>
                  </div>
             </>     
            )
          }) 
          )
        }
    </div> 
  </> 
  )
}
export default SearchPodcast
