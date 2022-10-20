import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { PlusIcon } from '@heroicons/react/20/solid'

const Menu = () => {
  return (
    <Disclosure as='nav' className='bg-red-600'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between content-center'>
              <div className='flex'>
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-shrink-0 items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
                    {' '}
                    <path d='M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z' />
                  </svg>
                </div>
                <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                  <a
                    href='/'
                    className='text-gray-50 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium visited: bg-red-600'
                  >
                    YourPodcasts
                  </a>

                  <>
                    <a
                      href='/register'
                      className='text-gray-50 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium active: bg-red-600
'
                    >
                      Registration
                    </a>
                    <a
                      href='/Login'
                      className='text-gray-50 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium'
                    >
                      Login
                    </a>
                  </>

                  <>
                    <a
                      href='/searchpodcast'
                      className='text-gray-50 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium'
                    >
                      Search
                    </a>
                    <a
                      href='/following'
                      className='text-gray-50 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium'
                    >
                      Following
                    </a>
                    <a
                      href='/listened'
                      className='text-gray-50 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium'
                    >
                      Listened
                    </a>

                    <a
                      href='/'
                      className='text-gray-50 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium'
                    >
                      Logout
                    </a>
                  </>
                </div>
              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  
                   
                   
                 
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
              <a
                href='/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Home
              </a>

              <a
                href='/dashboard'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Dashboard
              </a>

              <>
                <a
                  href='/login'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Login
                </a>
                <a
                  href='/register'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Register
                </a>
              </>

              <button className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Logout
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Menu
