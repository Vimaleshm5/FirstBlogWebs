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
        <div className='w-full h-screen flex justify-center items-center'>
            <div >
                <div >
                    <span >
                        <Logo  />
                    </span>
                </div>
                <h2 >Sign up to create account</h2>
                <p >
                    Already have an account?&nbsp;
                    <Link
                        to="/login"

                    >
                        Log In
                    </Link>
                </p>
                {error && <p >{error}</p>}

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
                        <Button type="submit" >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export { Signup} 