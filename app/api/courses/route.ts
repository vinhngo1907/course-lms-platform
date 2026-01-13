import { db } from "@/lib/lib";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        if (!userId || !isTeacher(userId)) throw new NextResponse("Unauthorized", { status: 401 });

        const { title } = await req.json()
        const course = await db.course.create({
            data: {
                title,
                userId
            }
        });
        
        return NextResponse.json(course);
    } catch (error) {
        console.log("[COURSES]", error);
        throw new NextResponse("Internal error", { status: 500 })
    }
}