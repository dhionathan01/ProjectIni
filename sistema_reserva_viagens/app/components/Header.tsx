'use client';
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const { status } = useSession();
    const logarComClick = () => signIn();
    const deslogarComClick = () => signOut();
    return (
        < div className="container mx-auto p-5 flex justify-between">
            <Image width={183} height={32} src="/logo.png" alt="Logo" />
            {status == "unauthenticated" && (
                <button className="text-primaria text-sm font-semibold" onClick={logarComClick}> Login </button>
            )}
            {status == "authenticated" && (
                <button className="text-primaria text-sm font-semibold" onClick={deslogarComClick}> Logout </button>
            )}
        </div>
    );
};
export default Header;