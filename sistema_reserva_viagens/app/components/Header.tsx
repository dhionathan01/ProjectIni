'use client';
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const { status, data } = useSession();
    const logarComClick = () => signIn();
    const deslogarComClick = () => signOut();
    return (
        < div className="container mx-auto p-5 flex justify-between">
            <Image width={183} height={32} src="/logo.png" alt="Logo" />
            {status == "unauthenticated" && (
                <button className="text-primaria text-sm font-semibold" onClick={logarComClick}> Login </button>
            )}
            {status == "authenticated" && data.user && (
                <div className="flex items-center">
                    <AiOutlineMenu size={16} />

                    <Image height={24} width={24} src={data.user.image!} alt={ data.user.name!} />
               </div>
            )}
        </div>
    );
};
export default Header;