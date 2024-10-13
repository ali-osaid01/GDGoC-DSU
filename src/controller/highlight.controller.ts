import { formDataToJson, generateResponse } from "../util/method";
import { STATUS_CODES } from "../util/helper";
import {
  createHighlight,
  deleteHighlight,
  fetchHighlight,
} from "../model";
import { connectDB } from "../../config/database.config";
import uploadToCloudinary from "../util/cloudinary";

class highlight {

  constructor() {
    connectDB();
  }
  // validate the request body
  private validate =  (body: FormData) => {

    const title = body.get('title');
    const speaker = body.get('speaker');
    const picture = body.get('picture');

    if (!title || !speaker || !picture) {
      throw new Error('All fields are required');
    }
  }

  // create highlight
  public createHighlights = async (request: Request) => {
    try {
      // get the form data
      const body = await request.formData();
      const data = await formDataToJson(body);
      console.log(data);
      this.validate(body);
      const picture = body.get("picture") as File;
      
      // uploading image on cloudinary
      const image = await uploadToCloudinary(picture) as any;
      
      // creating highlight
      const highlight = await createHighlight({  
        picture: image.secure_url,
        title:body.get('title'),
        speaker:body.get('speaker') 
      });

     return generateResponse(
        highlight,
        "Highlight created successfully",
        STATUS_CODES.CREATED
      );
    } catch (error: any) {
     return generateResponse(null, error.message, STATUS_CODES.UNPROCESSABLE_ENTITY);
    }
  };
  // fetch all the highlights
  public getHighlights = async () => {
    try {
      // fetch the highlights
      const highlights = await fetchHighlight();

      return generateResponse(
        highlights,
        "Highlights fetched successfully",
        STATUS_CODES.SUCCESS
      );
    } catch (error: any) {
     return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }
  
  // delete highlights
  public deleteHighlights = async (request: Request) => {
    try {
      const { id } = await request.json();

      if(!id) throw new Error('Id is required');
      
     const highlight = await deleteHighlight(id);

      if(!highlight) throw new Error("Highlight not found")
     
      return generateResponse(
        null,
        "Highlight deleted successfully",
        STATUS_CODES.SUCCESS
      );
    } catch (error: any) {
    return generateResponse(null, error.message, STATUS_CODES.UNPROCESSABLE_ENTITY);
    }
  }

}

const Highlight = new highlight();

export {Highlight};
