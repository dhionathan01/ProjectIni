import React, { ReactNode } from "react";

const Layout = ({ children }: {
    children: ReactNode
}) => {
    return (
        <div>
            <h2>Sempre será exibido dentro da rota about</h2>
            {children}
        </div>
    )
};

export default Layout