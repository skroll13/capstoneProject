import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import FormGroup from 'react-bootstrap/esm/FormGroup';

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
    <Container className='mainFont'>
     <h1>Search for Podcasts</h1>
     <p>
      When you've found something you'd like to listen to, or follow, sign up to become a user and log in. Once logged in, you will be able to search for episodes of your favorite podcast, save episodes to listen to in the future and keep track of episodes you have already heard.  Lastly, you are able to hear the podcast right within the app.
     </p>
    <div className='mb-3'>
      <div>
        <div>
          <input
            onChange={e => setSearchInput(e.target.value)}
            type='text'
            placeholder='Search for a Podcast Episode' 
          />
        </div>
        
        <div>
          <button
            onClick={handleInput}
            type='submit'
            className='btn btn-danger'
          >
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
                    
                        <button type='button' className='btn btn-danger'>
                          <button onClick={() => saveToFollowing(podcastObj)}>
                           Follow
                          </button>
                        </button>
                      
                      
                      <div className="button">
                        
                        <button type='button' className='btn btn-danger'>
                          <button onClick={() => saveToListened(podcastObj)}>
                            Save to Listened To
                          </button>
                        </button>
                      </div>
                </>
              )
          

            }))}
          </Container>
  )
        
}
export default SearchPodcast