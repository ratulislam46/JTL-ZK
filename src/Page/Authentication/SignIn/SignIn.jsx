import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router';
import AuthBg from '../AuthBg';

// Validation schema
const signupSchema = yup.object({
    email: yup.string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
}).required();
const SignIn = () => {

    const { signIn } = use(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: yupResolver(signupSchema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        try {
            // Simulate API call
            signIn(data.email, data.password)
            console.log('Form submitted:', data);

            // In real app, you would make an API call here
            // await signupAPI(data);

            // Show success message
            alert('Sign up successful! Welcome!');
            reset();
        } catch (error) {
            console.error('Signup error:', error);
            alert('Sign up failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen relative">
            {/* Background Image with Blur */}
            <AuthBg />

            {/* Form Container - Always Centered */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Card Container with Glass Effect */}
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white border-opacity-20">
                        {/* Header with Gradient */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
                                Welcome Back
                            </h1>
                            <p className="text-blue-100 text-center mt-2">
                                Sign in to your account
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="p-6 sm:p-8">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Please enter a valid email address'
                                            }
                                        })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out"
                                        placeholder="john@example.com"
                                        aria-invalid={errors.email ? "true" : "false"}
                                    />
                                    {errors.email && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center">
                                            <MdError className="mr-1" />
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters'
                                            }
                                        })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 ease-in-out"
                                        placeholder="••••••••"
                                        aria-invalid={errors.password ? "true" : "false"}
                                    />
                                    {errors.password && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center">
                                            <MdError className="mr-1" />
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                        Forgot password?
                                    </a>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Logging in...
                                        </>
                                    ) : (
                                        'Log in'
                                    )}
                                </button>
                            </form>

                            {/* Social Login Options */}
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70497C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                                            <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                                            <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.2749 6.60986C0.464966 8.22986 0 10.0599 0 11.9999C0 13.9399 0.464966 15.7699 1.2749 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                                            <path d="M12.0003 24C15.2403 24 17.9653 22.935 19.9453 21.095L16.0803 18.095C15.0053 18.82 13.6203 19.25 12.0003 19.25C8.87028 19.25 6.21525 17.14 5.27028 14.295L1.28027 17.39C3.25527 21.31 7.31028 24 12.0003 24Z" fill="#34A853" />
                                        </svg>
                                        <span className="ml-2">Google</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        <span className="ml-2">Facebook</span>
                                    </button>
                                </div>
                            </div>

                            {/* Sign Up Link */}
                            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                <p className="text-gray-600">
                                    Don't have an account?{' '}
                                    <Link to='/signup' className="text-blue-600 hover:text-blue-800 font-medium">
                                        Sign up here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;