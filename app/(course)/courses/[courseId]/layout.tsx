import { getProgress } from "@/actions/get-progress";
import { getSelf } from "@/lib/auth";
import { getCourseForUser } from "@/lib/course"
import { redirect } from "next/navigation";

export default async function CourseLayout({
    children,
    params,
}:{  children: React.ReactNode;
    params: { courseId: string }
}) {
    const self = await getSelf();
    const course = await getCourseForUser({id: params.courseId, userId: self.id});
    if(!course)  return redirect("/");
    
    const progressCount = await getProgress(self.id, course.id);

     return (
        <div className="h-full">
            <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
                {/* <CourseNavbar course={course} progressCount={progressCount} /> */}
            </div>
            <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
                {/* <CourseSidebar course={course} progressCount={progressCount} /> */}
            </div>
            <main className="md:pl-80 pt-[80px] h-full">{children}</main>
        </div>
    );
}