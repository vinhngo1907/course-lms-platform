import { auth } from "@clerk/nextjs/server";
import { DataTable } from "./_components/data-table";
import { redirect } from "next/navigation";
import { db } from "@/lib/lib";
import { columns } from "./_components/columns";

export default async function CouresPage() {
    const { userId } = await auth();
    if (!userId) return redirect("/");

    const courses = await db.course.findMany({
        where: {
            userId
        },
        orderBy: { createdAt: "desc" }
    });

    return (
        <div>
            <DataTable columns={columns} data={courses} />
        </div>
    )
}