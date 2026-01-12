import { getPublishedCourse } from "@/lib/course";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function CourseIdPage(
  {params} : {params: {courseId: string}}
) {
  const course = await getPublishedCourse(params.courseId)
  if(!course) return redirect("/")
  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);;
}
