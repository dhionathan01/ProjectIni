import React from "react";
import { prisma } from "@/lib/prisma";

const getViagens = async () => {
    const viagens = await prisma.viagem.findMany({});
    return viagens;
};

const Viagens = async () => {
    const data = await fetch("http:jsonplaceholder.typicode.com/posts").then((res) => res.json());
    console.log({ data });
    return (
        <div>
            {data.map((i: any) => (
                <p key={i.id}>{ i.title}</p>
            ))}
        </div>
    );
};
 
export default Viagens;