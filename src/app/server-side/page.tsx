'use server'

import { getCookie } from "@/app/actions/cookie"
import SomeContainer from "@/ui/SomeContainer";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page(){
    // This thing runs in server
    console.log("run in server")
    const value = await getCookie('CookieVar');

    // or you can parse your request here (only searchParams, cookie, and header)
    console.log(cookies().toString());

    // redirection is also possible
    // redirect()

    // SomeContainer and its child & dependencies will be rendered as client component since it has 'use client' directive
    return <SomeContainer cookieValue={value?.value}/>;
}
