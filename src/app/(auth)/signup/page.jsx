"use client";
import Navbar from "@/components/Navbar/Navbar";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { BarLoader } from "react-spinners";


const SignUpPage = () => {

    const [loading, setLoading] = useState(false);


    const handleSignUp = async (e) => {
        setLoading(true);
        e.preventDefault();
        const iptName = e.target.name.value;
        const iptEmail = e.target.email.value;
        const iptPassword = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name: iptName,
            email: iptEmail,
            password: iptPassword,
        })

        if (data) {
            alert('Sign Up successful')
        }

        if (!data) {
            alert(error.message)
        }
        setLoading(false);

    }

    return (
        <>
            <Navbar />

            <div className=" mt-5">
                <h1 className='text-2xl text-center font-bold'>Sign Up:</h1>

                <div className={`${!loading ? 'flex justify-center' : 'hidden'}`}>

                    <div className='flex justify-center'>
                        <form className='grid gap-5' onSubmit={handleSignUp}>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Name</legend>
                                <input name='name' type="text" className="input" placeholder="Name" required />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email</legend>
                                <input name='email' type="email" className="input" placeholder="Email" autoComplete='username' required />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Password</legend>
                                <input name='password' type="password" className="input" placeholder="Password" autoComplete='current-password' required />
                            </fieldset>

                            <button type='submit' className='btn btn-primary'>Sign Up</button>
                        </form>

                    </div>
                </div>

                <div className={`${loading ? 'grid justify-center text-2xl text-center font-bold mt-5' : 'hidden'}`}>
                    <h1>Processing Your Request</h1>
                    <BarLoader color="#28a8de" />
                </div>
            </div>
        </>
    );
};

export default SignUpPage;