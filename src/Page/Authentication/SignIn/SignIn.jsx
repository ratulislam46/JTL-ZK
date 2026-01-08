import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router';

// Validation schema
const signupSchema = yup.object({
    email: yup.string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        )
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Card Container */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
                            Welcome Your Account
                        </h1>
                        <p className="text-blue-100 text-center mt-2">
                            Join our community today
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
                                    {...register('email')}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-200 ease-in-out"
                                    placeholder="john@example.com"
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1 flex items-center">
                                        <MdError />
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
                                    {...register('password')}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-200 ease-in-out"
                                    placeholder="••••••••"
                                    aria-invalid={errors.password ? "true" : "false"}
                                />
                                {errors.password && (
                                    <p className="text-red-600 text-sm mt-1 flex items-center">
                                        <MdError />
                                        {errors.password.message}
                                    </p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">
                                    Must be at least 8 characters with uppercase, lowercase, and a number
                                </p>
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
                                        Login...
                                    </>
                                ) : (
                                    'Log in'
                                )}
                            </button>
                        </form>

                        {/* Already have account */}
                        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                            <p className="text-gray-600">
                                If you have no account?{' '}
                                <Link to='/signup' className="text-blue-600 hover:text-blue-800 font-medium">
                                    Sign up here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignIn;