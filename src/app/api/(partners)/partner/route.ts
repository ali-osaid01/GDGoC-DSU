import { partner } from '../.././../../controller/index'
import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {
  return await partner.getPartners(request);
}

export async function POST(request: NextRequest) {
    return await partner.createPartners(request);
}

export async function DELETE(request: NextRequest) {
    return await partner.deletePartner(request);
}

