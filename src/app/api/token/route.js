import { SignJWT } from "jose"
import { NextResponse } from "next/server"

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

    return NextResponse.json({TokenData: token})

}