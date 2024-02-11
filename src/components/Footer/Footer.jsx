import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section >
      <div >
        <div className='w-full  bg-slate-400 flex justify-between p-5 items-end '>
          <div >
            <div className='flex flex-col gap-72 '>
              <div >
                <Logo />
              </div>
              <div>
                <p >
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div >
            <div className='flex flex-col gap-28 '>
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
            <div className='flex flex-col gap-28 '>
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
            <div className='flex flex-col gap-28'>
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