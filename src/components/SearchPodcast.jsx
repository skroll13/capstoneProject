import React, { useState } from "react"
import { useDispatch } from "react-redux"
// import { addToFollowing } from "../actions/actions"
import axios from "axios"
// import { Button } from "@material-tailwind/react"
import CustomSearch from "../components/listenNotesTemplates/CustomSearch"

const { Client } = require('podcast-api')

const SearchPodcast = () => {
  const [searchInput, setSearchInput] = useState()
  const [searchResults, setSearchResults] = useState([])

  const dispatch = useDispatch() //initializing hook

  //Once I have database info, will send via Axios
  const saveToFollowing = podcastObj => {
    axios.post("/followingRoute", podcastObj)
    console.log(podcastObj)
    // dispatch(addToFollowing(podcastObj)) //lowercase -> action   CAP -> type
  }

  const handleInput = () => {
    const client = Client({ apiKey: "5631722333164e85ba9baaa0c517ca49" })

    client
      .search({
        q: searchInput,
        sort_by_date: 0,
        type: "podcast",
        offset: 0,
        len_min: 10,
        len_max: 30,
        published_before: 1580172454000,
        published_after: 0,
        language: "English",
        safe_mode: 0,
        unique_podcasts: 0
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
    <br  />
      <div className='search'>
        <input
          className='text-green-800'
          onChange={e => setSearchInput(e.target.value)}
          type='text'
          placeholder='Podcast or Episode'
        />
      <br  />
      <br  />
        <button
          className='rounded border border-red-700 bg-red-500 py-1 px-3 font-bold text-white hover:bg-red-700'
          onClick={handleInput}
          type='submit'>
          Search
        </button>
      </div>

      {!searchResults ? (
        <div></div>
      ) : (
        searchResults.map(podcastObj => {
          return (
            <>
              <img src={podcastObj.image} alt='' />{" "}
              <button onClick={() => saveToFollowing(podcastObj)}>Save</button>
            </>
          )
        })
      )}
    </>
  )
}

export default SearchPodcast
