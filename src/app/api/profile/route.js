import { NextRequest, NextResponse } from "next/server";
import {headers} from "next/headers";



// GET Request
export async function GET(req, res){
    //Query Params
    const {searchParams} = new URL(req.url)
    let name = searchParams.get('name')
    let age = searchParams.get('age')
    let address = searchParams.get('address')

    return NextResponse.json({status: 'success', msg: 'This is GET Request', data: name, age, address})
};

// POST Request
export async function POST(req, res){

    const postBodyJson = await req.json()

    // return NextResponse.json({status: 'success', msg: 'This is POST Request', data: postBody})
    return NextResponse.json({status: 'success', msg: 'This is POST Request', data: postBodyJson['name']})
};

// PUT Request
export async function PUT(req, res){
    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const address = formData.get('address')
    const taka = formData.get('taka')

    return NextResponse.json({status: 'success', msg: 'This is PUT Request', data: {name, email, address, taka}})
};

// PATCH Request
export async function PATCH(req, res){
    const headerList = headers()
    const token = headerList.get('token')
    
    return NextResponse.json({status: 'success', msg: 'This is PATCH Request', tokenData: token})
};

// DELETE Request
export async function DELETE(req, res){
    let cookie = req.cookies.get('Cookie_2')

    return NextResponse.json({status: 'success', msg: 'This is DELETE Request', data: cookie})
};