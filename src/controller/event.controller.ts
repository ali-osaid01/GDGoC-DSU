import { connectDB } from "../../config/database.config";
import uploadToCloudinary from "../util/cloudinary";
import {  generateResponse } from "../util/method";
import { STATUS_CODES } from "../util/helper";
import { createEvent, deleteEvent, fetchEvent } from "../model/event.model";

class EventAPi{
    
    EventApi(){
        connectDB();
    }

    public  getEvents = async (request: Request) => {
        try {
            // fetch the highlights
            const {searchParams} = new URL(request.url);

            const topEvent = searchParams.get('topEvent');
            const speaker = searchParams.get('speaker');
            
            if(!topEvent) throw new Error("Top event is required");
            
           
            let pipeline= []
            
            pipeline.push({$match: {topEvent: topEvent === 'true' ? true : false}});

            const events = await fetchEvent(pipeline);

            let data = events;
            
            if(speaker == 'true'){
                data = data.map((event: any) => ({
                    speakerName: event.speaker,
                    speakerImage: event.speakerImage,
                    content: event.content,
                    speakerLinkedln: event.speakerLinkedln
                }));
            data = data.filter((event)=>event.speakerName !== 'NA')
            }
            return generateResponse(data, "Events fetched successfully", STATUS_CODES.SUCCESS); 
        } catch (error) {
            return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
        }
    }
    public createEvent = async (request: Request) => {
        try {
            const body = await request.formData();
            const picture = body.get("picture") as File;
            
            const topEvent = body.get('topEvent') === 'true' ? true : false;
            // uploading image on cloudinary
            if(topEvent){
                if(!body.get('speaker')) throw new Error("Speaker is required");
                if(!body.get('speakerImage')) throw new Error("Speaker Image is required");
                if(!body.get('SpeakerBio')) throw new Error("Speaker Bio is required");
            }

            const image = await uploadToCloudinary(picture) as any;
            const speakerImage = await uploadToCloudinary(body.get("speakerImage") as File) as any;
            const event = await createEvent({
                name: body.get('name') as string,
                picture: image.secure_url as string,
                content: body.get('content') as string,
                title: body.get('title') as string,
                topEvent,
                location: body.get('location') as string,
                speaker: body.get('speaker') as string,
                speakerBio: body.get('SpeakerBio') as string,
                speakerLinkedln: body.get('speakerLinkedln') as string,
                speakerImage: speakerImage.secure_url as string,
            });
            
          
      
            return generateResponse(
              event,
              "Event created successfully",
              STATUS_CODES.CREATED
            );
          } catch (error: any) {
           return generateResponse(null, error.message, STATUS_CODES.UNPROCESSABLE_ENTITY);
          }
    }
    public deleteEvents = async (request: Request) => {
        try {
            const {searchParams} = new URL(request.url);
            const id = searchParams.get('id');
            if(!id) throw new Error("Id is required");
            await deleteEvent(id);
            return generateResponse(null, "Event deleted successfully", STATUS_CODES.SUCCESS);
        } catch (error) {
            return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
        }
    }
}
const Event = new EventAPi();

export {Event};