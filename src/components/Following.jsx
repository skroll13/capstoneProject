import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


  

const Following = () => {
  const [followedPodcast, setFollowedPodcast] = useState([])
  const [triggerRefresh, setTriggerRefresh] = useState(false)
  const [open, setOpen] = useState(true)


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
    
    const deletePodcast = (id) => {
      axios.delete(`api/v1/following/${id}`)
      setTriggerRefresh(!triggerRefresh)
      console.log(id)
    } 
    const updateNotes = id => {
  axios.update(`api/v1/following/${id}`)
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
              <img key={podcastObj.id} src={podcastObj.image} alt='' />{' '}
              <button onClick={() => deletePodcast(podcastObj.id)}>Delete Podcast</button>
              <button onClick={() => updateNotes(podcastObj.id)}>Update Notes</button>
return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="absolute inset-0 px-4 sm:px-6">
                        <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )

             
             
              
            </>
          )
        })
      )}
    </>
  )
}

export default Following
