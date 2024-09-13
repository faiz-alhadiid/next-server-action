import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const res = new NextResponse("Cookie Set", { status: 200 });
    res.cookies.set({
        name: "CookieVar",
        value: "TestValue" + Math.random(),
        httpOnly: true,
    })

    return res;
}
