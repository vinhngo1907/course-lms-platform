"use client";

import { Course, UserProgress, Chapter } from "@prisma/client";
import React from "react";

interface CoursNavbarProps {
    course: Course & {
        chapters: (
            Chapter & {
                userProgress: UserProgress[] | null;
            })[]
    },
    progressCount: number
}

export const CourseNavbar = ({ course, progressCount }: CoursNavbarProps) => {
    return (
        <></>
    )
}