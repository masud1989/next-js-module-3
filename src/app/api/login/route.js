import { SignJWT } from "jose"
import { NextResponse } from "next/server"


export async function GET (req, res){
    
}



export async function POST (req, res){
    const JsonBody = await req.json()
    const userName = JsonBody['username']
    const password = JsonBody['password']

    // db check 
    if (userName === 'masud' && password === '5566') {
        
        const payload = {username: userName}
        const alg = 'HS256'
        const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

        let token = await new SignJWT(payload)
                        .setProtectedHeader({alg})
                        .setIssuedAt()
                        .setIssuer('http://localhost:3000')
                        .setExpirationTime('5h')
                        .sign(secret);

        return NextResponse.json({msg: 'Login Success', token:token}, {status:200})

    } else {
        return NextResponse.json({msg: 'Login Fail'}, {status:401} )
    }
}