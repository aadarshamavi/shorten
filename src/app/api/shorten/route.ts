import db from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"
import ShortUniqueId from "short-unique-id"

export const POST = async(req: NextRequest) => {
    try {
        const { url } = await req.json() as {
            url:string
        }
        const dbUrl = await db.link.findFirst({
            where: {
                originalLink: url
            }
        });
        if(dbUrl)
        {
            return NextResponse.json({
                success: true,
                url: dbUrl.shortenLink
            },{status:200})
        }
        else {
            const { randomUUID } = new ShortUniqueId({ length: 6 });
            let newLink = await db.link.create({
                data: {
                    originalLink: url,
                    shortenLink:process.env.NEXT_URL as string+randomUUID().toLocaleLowerCase()
                },
            },
            )
            return NextResponse.json({
                success: true,
                url:newLink.shortenLink
            },{status:200}
            )
        }
    } catch (error) {
        return NextResponse.json({
            success: false,
            url:null
        },{status:500}
        )
    }
}