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
    <div className=".bg-danger ">
    <br  />
    <br  />
    <br  />
    <br  />
    <h1>search</h1>
      <br />
      <br />
      <br />
      <br />
      <div className='search'>
        <input
          className='text-black-800'
          onChange={e => setSearchInput(e.target.value)}
          type='text'
          placeholder='Podcast or Episode'
        />
  {""}
        <br />
        <br />
        <button
          className='rounded border border-red-700 bg-red-500 py-1 px-3 font-bold text-white hover:bg-red-700'
          onClick={handleInput}
          type='submit'
        >
          Search
        </button>
      </div>

      {!searchResults ? (
        <div></div>
      ) : (
        searchResults.map(podcastObj => {
          return (
            <>
              <container>
              <div class="btn-group mr-2" role="group" aria-label="Basic example">
                              <img src={podcastObj.image} alt='' />{' '}

                              <div className="button">
                              {" "}
                                <button type='button' class='btn btn-outline-danger btn-small'>
                                      <button onClick={() => saveToFollowing(podcastObj)}>
                                        Save to Following
                                      </button> 
                                </button>
                                <br  />
                                {" "}
                              </div>


                              <div className="buton">
                             {" "}
                                <button type='button' class='btn btn-outline-danger btn-small'>
                                <button onClick={() => saveToListened(podcastObj)}>
                                  Save to Listened
                                </button>
                                </button>
                              </div>
                             
                              
                </div>
              </container>
            </>
          )
        })
      )}
      </div>
    </>
  )
}

export default SearchPodcast
