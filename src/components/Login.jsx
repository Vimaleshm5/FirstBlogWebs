import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Logo from './Logo';
import Button from './Button';
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import Input from './Input';
import { login as authLogin } from '../store/authSlice';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

const login = async (data) => {
        setError('')
        try {
            const session = await authService.login(data)
         

            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='w-full h-4/5 flex justify-center items-center'>
            <div  className='w-2/5 h-96 border-4 flex flex-col justify-center items-center gap-4 my-0 font-medium text-lg'>
                <div >
                    <span >
                        <Logo />
                    </span>
                </div>
                <h2 >Sign in to your account</h2>
                <p >
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"

                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p >{error}</p>}
                <form onSubmit={handleSubmit(login)}>
                    <div className='mt-2'>
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
                        <Button
                            type="submit"

                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login