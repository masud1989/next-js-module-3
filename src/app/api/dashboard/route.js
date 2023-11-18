import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    //Find User Identity by checking header
    const head = headers()
    const userName = head.get('username')

    return NextResponse.json({msg: 'Dashboard is Gotten', data: userName})
}