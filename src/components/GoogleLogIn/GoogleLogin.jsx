"use client"

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';

const GoogleLogin = () => {
    const handleGoogleLogIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className='flex justify-center my-3'>
            <Button onClick={handleGoogleLogIn}>Log In With Google</Button>
        </div>
    );
};

export default GoogleLogin;