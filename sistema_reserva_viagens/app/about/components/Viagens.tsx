import React from "react";
import { prisma } from "@/lib/prisma";

const getViagens = async () => {
    const viagens = await prisma.viagem.findMany({});
    return viagens;
};

const  Viagens = async () => {
    const data = await getViagens();
    console.log({ data });
    return ( <div>Viagem</div> );
}
 
export default Viagens;