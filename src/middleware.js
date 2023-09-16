// using default  you can use another names
import { NextResponse } from "next/server"

export function middleware(request) {
    // console.log("middleware")

    // if (request.nextUrl.pathname!="/login") {
    //     return NextResponse.redirect(new URL("/login", request.url))
    // }
    return NextResponse.redirect(new URL("/login", request.url))



}
// for specific route
export const config = {
    matcher: ["/about/:path*", "/study/:path*"]
    // if you want to add another path too and use array
}

// using middleware in all path 


/* 
    import { NextResponse } from "next/server"

export function middleware(request) {
    // console.log("middleware")

     if (request.nextUrl.pathname!="/login") {
         return NextResponse.redirect(new URL("/login", request.url))
     }
    



}

*/