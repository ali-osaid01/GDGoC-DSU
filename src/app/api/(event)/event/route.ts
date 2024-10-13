import { NextRequest } from "next/server";
import {Event} from '../../../../controller/event.controller';

export async function GET(request: NextRequest) {
    return await Event.getEvents(request);
  }
  
  export async function POST(request: NextRequest) {
      return await Event.createEvent(request);
  }
  
  export async function DELETE(request: NextRequest) {
  return await Event.deleteEvents(request);
  }
  
  