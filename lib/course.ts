import { getSelf } from "./auth";
import { db } from "./lib"

export const getCourseForUser = async ({id, userId}:{id: string, userId: string}) => {
    // const self = await getSelf();
    const course = await db.course.findUnique({
        where: {id},
        include:{
            chapters: {
                where: {
                    isPublished: true
                },
                include: {
                    userProgress: {where: {userId}}
                },
                orderBy: {position: "asc"}
            }
        },
    });
    return course;
}

export async function getPublishedCourse(courseId: string) {
  return db.course.findUnique({
    where: { id: courseId },
    include: {
      chapters: {
        where: { isPublished: true },
        orderBy: { position: "asc" },
      },
    },
  });
}