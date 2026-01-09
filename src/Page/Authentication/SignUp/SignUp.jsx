import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdError } from 'react-icons/md';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router';
import AuthBg from '../AuthBg';

// Validation schema
const signupSchema = yup.object({
    firstName: yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters'),
    lastName: yup.string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be less than 50 characters'),
    email: yup.string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        ),
    confirmPassword: yup.string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match')
}).required();

const SignUp = () => {

    const { signUp } = use(AuthContext);

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
            signUp(data.email, data.password)
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

            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    {/* Card Container */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
                                Create Your Account
                            </h1>
                            <p className="text-blue-100 text-center mt-2">
                                Join our community today
                            </p>
                        </div>

                        {/* Form Container */}
                        <div className="p-6 sm:p-8">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Name Fields - Side by side on desktop, stacked on mobile */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    {/* First Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            {...register('firstName')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-200 ease-in-out"
                                            placeholder="John"
                                            aria-invalid={errors.firstName ? "true" : "false"}
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-600 text-sm mt-1 flex items-center">
                                                <MdError />
                                                {errors.firstName.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Last Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            {...register('lastName')}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-200 ease-in-out"
                                            placeholder="Doe"
                                            aria-invalid={errors.lastName ? "true" : "false"}
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-600 text-sm mt-1 flex items-center">
                                                <MdError />
                                                {errors.lastName.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

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

                                {/* Confirm Password Field */}
                                <div className="space-y-2">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        {...register('confirmPassword')}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300  transition duration-200 ease-in-out"
                                        placeholder="••••••••"
                                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-red-600 text-sm mt-1 flex items-center">
                                            <MdError />
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
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
                                            Creating Account...
                                        </>
                                    ) : (
                                        'Create Account'
                                    )}
                                </button>
                            </form>

                            {/* Terms and Conditions */}
                            <p className="text-xs text-gray-500 text-center mt-6">
                                By clicking "Create Account", you agree to our{' '}
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Terms of Service</a> and{' '}
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</a>
                            </p>

                            {/* Already have account */}
                            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                <p className="text-gray-600">
                                    Already have an account?{' '}
                                    <Link to='/signin' className="text-blue-600 hover:text-blue-800 font-medium">
                                        Sign in here
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

export default SignUp;