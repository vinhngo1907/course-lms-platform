import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/lib";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import { TitleForm } from "./_components/title-form";

export default async function CourseIdPage({ params }: {
    params: Promise<{
        courseId:
        string
    }>
}) {
    const { userId } = await auth();
    if (!userId) return redirect("/");
    const { courseId } = await params;

    const course = await db.course.findUnique({
        where: { id: courseId, userId },
        include: {
            chapters: { orderBy: { position: "asc" } },
            // attachments: { orderBy: { createdAt: "asc" } }
        }
    });

    if (!course) return redirect("/");

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">Course setup</h1>
                    <span className="text-sm text-slate-700">Complete all fields</span>
                </div>
                {/* <Actions /> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard} />
                        <h2 className="text-xl">Customize your course</h2>
                    </div>
                    <TitleForm initialData={course} courseId={course.id} />
                </div>
            </div>
        </div>
    )
}