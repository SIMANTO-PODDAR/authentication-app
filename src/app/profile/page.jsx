"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const ProfilePage = () => {

    const {
        data: session
    } = authClient.useSession()

    const user = session?.user;

    if (!user) {
        return (
            <div className='grid justify-center text-left mt-3 font-bold text-xl'>
                <h1>Please Log In first to visit Profile!</h1>
            </div>
        );
    }

    return (
        <div className='grid justify-center text-left mt-3 font-bold text-xl'>
            <h1 className='text-center text-2xl my-2 underline'>Profile</h1>
            <h1>Name:  <span>{user.name.toUpperCase()}</span> </h1>
            <h1>Email: <span className='italic'>{user.email.toLowerCase()}</span> </h1>
        </div>
    );
};

export default ProfilePage;