'use server'

import { cookies } from "next/headers"

export async function getCookie(name: string) {
  console.log("This function run on server")
  return cookies().get(name)
}
