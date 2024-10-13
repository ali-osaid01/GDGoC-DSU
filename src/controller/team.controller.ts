import { generateResponse } from "../util/method";
import { STATUS_CODES } from "../util/helper";
import { connectDB } from "../../config/database.config";
import { createUser, deleteTeam, findTeam } from "../model";
import uploadToCloudinary from "../util/cloudinary";
import {  validationLeads, validationTeam } from "../../validation";

class Team {

    constructor() {
        connectDB();
    }
    
    // create a  leader
    public createLeads = async (request: Request) => {
        try {
            const body = await request.formData();

            // Validate fields
            validationLeads(body);

            // Upload picture to Cloudinary
            const image = await uploadToCloudinary(body.get("picture") as File) as any;

            // Create lead in database
            const lead = await createUser({
                fullname: body.get('fullname'),
                email: body.get('email'),
                role: "lead",
                bio: body.get('bio'),
                tagline: body.get('tagline'),
                picture: image.secure_url,
                facebook: body.get('facebook'),
                instagram: body.get('instagram'),
                linkedin: body.get('linkedin'),
            });

            // Return success response
            return generateResponse(
                lead,
                "Lead created successfully",
                STATUS_CODES.CREATED
            );
        } catch (error:any) {
            // Return error response
            return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
        }
    }
    // create a team or excutive team member 
    public createTeam = async (request: Request) => {
        try {
            const body = await request.formData();

            validationTeam(body);
            // Upload picture to Cloudinary
            const image = await uploadToCloudinary(body.get("picture") as File) as any;

            // Create lead in database
            const team = await createUser({
                fullname: body.get('fullname'),
                email: body.get('email'),
                role: body.get('role'),
                bio: body.get('bio'),
                tagline: body.get('tagline'),
                picture: image.secure_url,
                team: body.get('team'),
                facebook: body.get('facebook'),
                instagram: body.get('instagram'),
                linkedin: body.get('linkedin'),
            });

            // Return success response
            return generateResponse(
                team,
                "Team Member created successfully",
                STATUS_CODES.CREATED
            );
        } catch (error:any) {
            // Return error response
            return generateResponse(null, error.message, STATUS_CODES.UNPROCESSABLE_ENTITY);
        }
    }

    // fetch a team or excutive team member or leads
    public fetchTeam = async (request:Request) => {
        try {
            const {searchParams} = new URL(request.url);

              const role = searchParams.get("role");
              const team = searchParams.get("team");
              
              // one of them is required
              if(!role && !team) throw new Error("Role or Team is required");

              const pipeline = [];

              if (role) {
                  pipeline.push({ $match: { role } });
              }
              if (team) {
                  pipeline.push({ $match: { team } });
              }

            const teams = await findTeam(pipeline);
         return  generateResponse(teams, "Team fetched successfully", STATUS_CODES.SUCCESS);
        } catch (error:any) {
            return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
        }
    }
    // delete any team member
    public deleteTeams = async (request:Request) => {
        try {
            const {searchParams} = new URL(request.url);
            const id = searchParams.get("id");
            // id required
            if(!id) throw new Error("Id is required");

            const team =  await deleteTeam(id);

            if(!team) throw new Error("Team Member not found");
        
            return generateResponse(null, "Team deleted successfully", STATUS_CODES.SUCCESS);
        } catch (error:any) {
            return generateResponse(null, error.message, STATUS_CODES.INTERNAL_SERVER_ERROR);
        }    
    }
}

const team = new Team();
export { team };
