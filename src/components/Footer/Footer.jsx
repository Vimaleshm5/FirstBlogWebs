import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='bg-gray-400 border-t-4 border-t-black py-10 border'>
      <div className='px-4' >
        <div className='m-6 flex flex-wrap'>
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className='flex flex-col justify-between'>
              <div className="mb-4 items-center">
                <Logo />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div >
            <div >
              <h3 >
                Company
              </h3>
              <ul>
                <li >
                  <Link

                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li >
                  <Link

                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li >
                  <Link

                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link

                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div >
            <div >
              <h3 >
                Support
              </h3>
              <ul>
                <li >
                  <Link

                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li >
                  <Link

                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li >
                  <Link

                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link

                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div >
            <div >
              <h3 >
                Legals
              </h3>
              <ul>
                <li >
                  <Link

                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li >
                  <Link

                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link

                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer