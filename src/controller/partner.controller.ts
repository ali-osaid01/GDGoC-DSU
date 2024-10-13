import { generateResponse } from "../util/method";
import { STATUS_CODES } from "../util/helper";
import {
    createPartner,
    deletePartner,
    fetchPartner
} from "../model";
import { connectDB } from "../../config/database.config";
import uploadToCloudinary from "../util/cloudinary";

class Partner {

  constructor() {
    connectDB();
  }

  // validate the request body
  private validate =  (body: FormData) => {

    if (body.get('picture') === null) {
      throw new Error('Picture is required');
    }
  }

  // create partner
  public createPartners = async (request: Request) => {
    try {
      
      // get the form data
      const body = await request.formData();
      
      // validate the body
      this.validate(body);

      const picture = body.get("picture") as File;
      
      // uploading image on cloudinary
      const image = await uploadToCloudinary(picture) as any
      
      // create partner object
        const partner = await createPartner({  picture: image.secure_url });
      
     return generateResponse(
        partner,
        "partner created successfully",
        STATUS_CODES.CREATED
      );
    } catch (error: any) {
     return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  };

  // fetch all the partner
  public getPartners = async (request: Request) => {
    try {

      const partners = await fetchPartner();
      return generateResponse(
        partners,
        "partners fetched successfully",
        STATUS_CODES.SUCCESS
      );
    } catch (error: any) {
     return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }
  
  // delete partner
  public deletePartner = async (request: Request) => {
    try {
      const { id } = await request.json();
      
      if(!id) throw new Error('Id is required');
      
      const partner = await deletePartner(id);
      
      // if id is not a valid id
      if(!partner) throw new Error('Partner not found');

     return generateResponse(
        null,
        "partner deleted successfully",
        STATUS_CODES.SUCCESS
      );
    } catch (error: any) {
    return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
  }

}

const partner = new Partner();

export {partner};
