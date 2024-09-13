'use server'
export async function random() {
  console.log("should run in server");
  return Math.floor(Math.random() * 100)
}
