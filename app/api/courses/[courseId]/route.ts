import { db } from "@/lib/lib";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    try {

    } catch (error) {
        console.log("[COURSE_ID]", error);
        throw new NextResponse("Internal error", { status: 500 })
    }
}