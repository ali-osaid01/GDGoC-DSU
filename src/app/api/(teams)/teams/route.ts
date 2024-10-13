import { team } from '../../../../controller/index'
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    return await team.createTeam(request);
}

export async function GET(request: NextRequest) {
    return await team.fetchTeam(request);
}


export async function DELETE(request: NextRequest) {
    return await team.deleteTeams(request);
}