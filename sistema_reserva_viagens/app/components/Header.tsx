import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        < div className="container mx-auto p-5 flex justify-between">
            <Image width={183} height={32} src="/logo.png" alt="Logo" />
            <button className="text-primaria text-sm font-semibold"> Login </button>
        </div>
    );
};
export default Header;