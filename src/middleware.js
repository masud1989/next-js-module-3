import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware (req, res, next){
    if (req.nextUrl.pathname.startsWith('/api/profile')) {
        try {
            // Token get from Header 
            const reqHeaders = new Headers(req.headers)
            const token = reqHeaders.get('token')

            // token verify 
            const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
            const decodedData = await jwtVerify(token, secret)
            

            // Add with next request header 
            const userName = decodedData['payload']['userName']
            reqHeaders.set('username', userName)

            return NextResponse.next({
                request: {headers: reqHeaders}
            })
        } 
            catch (error) {
            return NextResponse.json({status: 'fail', message:'Unauthorized Data'}, {status: 401})
        }
    }
    
    
    return NextResponse.next()
}