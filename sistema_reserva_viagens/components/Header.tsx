'use client';
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const [ menuIsOpen, setMenuIsOpen ] = React.useState(false);
    const { status, data } = useSession();
    const logarComClick = () => signIn();
    const menuClick = () => setMenuIsOpen(!menuIsOpen);
    const deslogarComClick = () => {
        setMenuIsOpen(false);
        signOut();
    };
    return (
        < div className="container mx-auto p-5 py-0 h-{93px} flex justify-between items-center">
            <div className="relative h-{32px} w-{182px}">
                <Image width={183} height={32} src="/logo.png" alt="Logo" />
            </div>
            {status == "unauthenticated" && (
                <button className="text-primaria text-sm font-semibold cursor-pointer" onClick={logarComClick}> Login </button>
            )}
            {status == "authenticated" && data.user && (
                <div className="flex items-center gap-3 border-cinzaClaro border border-solid rounded-full p-2 px-3 relative">
                    <AiOutlineMenu size={16} onClick={menuClick}/>
                    <Image className="rounded-full shadow-md" height={35} width={35} src={data.user.image!} alt={data.user.name!} />
                    {menuIsOpen && (
                        <div className="absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <button className="text-primaria text-xs font-semibold" onClick={deslogarComClick}>
                                Logout
                            </button>
                        </div>
                    )}
               </div>
            )}
        </div>
    );
};
export default Header;