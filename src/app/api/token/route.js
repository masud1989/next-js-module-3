import { SignJWT, jwtVerify } from "jose"
import { NextResponse } from "next/server"

// Create/Encode Token 
export async function GET(req, res){
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    const payload = {email: 'mern.masud@gmail.com', userId: 'user_56'}
    const alg = 'HS256'

    let token = await new SignJWT(payload)
                    .setProtectedHeader({alg})
                    .setIssuedAt()
                    .setIssuer('http://localhost:3000')
                    .setExpirationTime('5h')
                    .sign(secret)

    return NextResponse.json({token: token})

}


// Decode Token 
export async function POST (req, res){
    const JsonBody = await req.json()
    const Token = JsonBody['token']

    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    const Decoded = await jwtVerify(Token, secret)

    return NextResponse.json(Decoded)
}