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
      headers: { 'authorization': `bearer ${localStorage.token}`
 },
      
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
  axios.post('/api/v1/listened', newPodcast,  {headers: { 'authorization': `bearer ${localStorage.token}`}},)
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
    <div className=" mx-auto relative">
      <div className='mt-20 grid grid-cols-1'>
        <div className="place-self-center">
          <input
            className='text-slate-400 italic w-80 text-center font-mono rounded'
            onChange={e => setSearchInput(e.target.value)}
            type='text'
            placeholder='Search for a Podcast Episode' />
        </div>
        {""}
        <div className="place-self-center p-0">
          <button
            className='m-5 mb-10 rounded border font-serif border-red-600 bg-red-500 py-2 px-5 font-bold text-white hover:bg-red-600'
            onClick={handleInput}
            type='submit'>
            Search
          </button>
        </div>
      </div>
    </div>
  
        {!searchResults ? (
          <div></div>
        ) : (
          searchResults.map(podcastObj => {
            return (
              <>
                    <img className="border grid-cols-2 gap2" src={podcastObj.image} alt='' />
                   
                      <button type='button' className="rounded border font-mono border-red-600 bg-red-500 py-2 px-5 font-bold text-white hover:bg-red-600 btn-small">
                        <button onClick={() => saveToFollowing(podcastObj)}>
                          Save to Following
                        </button>
                      </button>
                     
                    
                    <div className="button">
                      
                      <button type='button' className='rounded border font-mono border-red-600 bg-red-500 font-bold text-white hover:bg-red-600 btn-small"'>
                        <button onClick={() => saveToListened(podcastObj)}>
                          Save to Listened
                        </button>
                      </button>
                    </div>
              </>
            )
        

          }))}</>)}
export default SearchPodcast