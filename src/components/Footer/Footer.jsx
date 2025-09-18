import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
const Footer = () => {
  return (
   <footer className="bg-[var(--color-secondary-950)] ">
            <div className="px-5 pt-5 md:px-10 md:pt-15">
                <div className="-m-6 flex">
                    <div className="w-full p-6">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm">
                                    &copy; Copyright 2023. All Rights Reserved by Skill Stream.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 ">
                        <div className="h-full">
                            <h3 className="tracking-px mb-7  text-xs font-semibold uppercase">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li >
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6">
                        <div className="h-full">
                            <h3 className="tracking-px mb-7  text-xs font-semibold uppercase">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium"
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
        </footer>
  )
}

export default Footer