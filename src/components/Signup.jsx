import React, { useState } from 'react'

import authService from '../appwrite/auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const signup = async (data) => {
        try {
            const userData = await authService.creteAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData))
                navigate("/")

            }
        } catch (error) {
            setError(error.message)
        }

    }


    return (
        <div className='flex justify-center items-center my-5'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className="mb-2 flex justify-center" >
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo  />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight '>Sign up to create account</h2>
                <p className='text-center mt-2 ' >
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className='text-green-500 font-bold text-xl hover:underline'

                    >
                        Log In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center" >{error}</p>}

                <form onSubmit={handleSubmit(signup)}>
                    <div >
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export { Signup} 