import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addToFollowing } from "../actions/actions"
import axios from "axios"


const { Client } = require("podcast-api")

const SearchPodcast = () => {
  const [searchInput, setSearchInput] = useState()
  const [searchResults, setSearchResults] = useState([])

  const dispatch = useDispatch() //initializing hook

  //Once I have database info, will send via Axios
  const saveToFollowing = podcastObj => {
    axios.post("/addToFollowing", podcastObj)
    console.log(podcastObj)
    // dispatch(addToFollowing(podcastObj)) //lowercase -> action   CAP -> type
  }

  const handleInput = () => {
    const client = Client({ apiKey: "0c384497ab0f499d826355875d1c708e" })

    client
      .search({
        q: searchInput,
        sort_by_date: 0,
        type: "episode",
        offset: 0,
        len_min: 10,
        len_max: 30,
        genre_ids: "68,82",
        published_before: 1580172454000,
        published_after: 0,
        only_in: "title,description",
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
      <div className='search'>
        <input
          className='text-green-800'
          onChange={e => setSearchInput(e.target.value)}
          type='text'
          placeholder='Search'
        />
        <div className='mx-auto w-full text-center'>
          <button
            className='large bg-rose-300 shadow-lg shadow-rose-500/50'
            onClick={handleInput}
            type='submit'>
            Search
          </button>
        </div>
      </div>

      {!searchResults ? (
        <div></div>
      ) : (
        searchResults.map(podcastObj => {
          return (
            <>
              <img src={podcastObj.image} alt='' />{" "}
              <button onClick={() => saveToFollowing(podcastObj)}>Save</button>


              <div class='mx-auto max-w-2xl'>
                <form>
                  <div class='group relative z-0 mb-6 w-full'>
                    <input
                      type='email'
                      name='floating_email'
                      class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                      placeholder=' '
                      required
                    />
                    <label
                      for='floating_email'
                      class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                      Email address
                    </label>
                  </div>
                  <div class='group relative z-0 mb-6 w-full'>
                    <input
                      type='password'
                      name='floating_password'
                      id='floating_password'
                      class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                      placeholder=' '
                      required
                    />
                    <label
                      for='floating_password'
                      class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                      Password
                    </label>
                  </div>
                  <div class='group relative z-0 mb-6 w-full'>
                    <input
                      type='password'
                      name='repeat_password'
                      id='floating_repeat_password'
                      class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                      placeholder=' '
                      required
                    />
                    <label
                      for='floating_repeat_password'
                      class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                      Confirm password
                    </label>
                  </div>
                  <div class='grid xl:grid-cols-2 xl:gap-6'>
                    <div class='group relative z-0 mb-6 w-full'>
                      <input
                        type='text'
                        name='floating_first_name'
                        id='floating_first_name'
                        class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_first_name'
                        class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                        First name
                      </label>
                    </div>
                    <div class='group relative z-0 mb-6 w-full'>
                      <input
                        type='text'
                        name='floating_last_name'
                        id='floating_last_name'
                        class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_last_name'
                        class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                        Last name
                      </label>
                    </div>
                  </div>
                  <div class='grid xl:grid-cols-2 xl:gap-6'>
                    <div class='group relative z-0 mb-6 w-full'>
                      <input
                        type='tel'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        name='floating_phone'
                        id='floating_phone'
                        class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_phone'
                        class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                        Phone number (123-456-7890)
                      </label>
                    </div>
                    <div class='group relative z-0 mb-6 w-full'>
                      <input
                        type='text'
                        name='floating_company'
                        id='floating_company'
                        class='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
                        placeholder=' '
                        required
                      />
                      <label
                        for='floating_company'
                        class='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500'>
                        Company (Ex. Google)
                      </label>
                    </div>
                  </div>
                  <button
                    type='submit'
                    class='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'>
                    Submit
                  </button>
                </form>

                <p class='mt-5'>
                  Check out the original floating label form elements on{" "}
                  <a
                    class='text-blue-600 hover:underline'
                    href='#'
                    target='_blank'>
                    Flowbite
                  </a>{" "}
                  and browse other similar components built with Tailwind CSS.
                </p>
              </div>
            </>
          )
        })
      )}
    </>
  )
}

export default SearchPodcast
