import { auth } from '../.././../../controller/index'
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return await auth.generateOTP(request);
}

export async function PUT(request: NextRequest) {
    return await auth.verifyOTP(request);
}