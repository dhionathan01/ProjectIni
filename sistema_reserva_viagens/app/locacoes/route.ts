import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { resolve } from "path";
import { setTimeout } from "timers/promises";

export async function GET() {
    const viagens = await prisma.viagem.findMany();
    return new NextResponse(JSON.stringify(viagens), {status: 200})
}