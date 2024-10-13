import { auth } from '../.././../../controller/index'
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  return await auth.register(request);
}

