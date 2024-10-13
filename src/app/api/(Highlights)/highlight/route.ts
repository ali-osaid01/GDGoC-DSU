import { Highlight } from '../.././../../controller/index'
import { NextRequest } from "next/server";

export async function GET() {
  return await Highlight.getHighlights();
}

export async function POST(request: NextRequest) {
    return await Highlight.createHighlights(request);
}

export async function DELETE(request: NextRequest) {
    return await Highlight.deleteHighlights(request);
}

