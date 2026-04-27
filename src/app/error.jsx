"use client"

import { Button } from "@heroui/react";
import Link from "next/link";

const error = () => {
    return (
        <div>
            <div className="mt-20">
                <h1 className="text-center font-bold text-2xl">Page Not Found ERROR! </h1>
                <Link href='/' className="flex mt-5 justify-center"><Button>Home</Button></Link>
            </div>
        </div>
    );
};

export default error;