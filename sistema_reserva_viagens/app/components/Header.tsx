import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        < div className="container mx-auto" >
            <Image width={183} height={32} src="/logo.png" alt="Logo" />
        </div>
    );
};

export default Header;