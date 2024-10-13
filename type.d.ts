interface LoginCredentials {
    email: string;
    password: string;
  }

interface IUser {
    _id:string
    fullname: string;
    email: string;
    password: string;
    otp: string;
    isLead: boolean;
    createdAt: Date;
    updatedAt: Date;
    role:string
}

interface DecodedToken extends JwtPayload {
  email: string; 
}

export type CardProps = {
  fullname: string;
  email: string;
  role: string;
  tagline: string;
  bio: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  picture: string;
};

export interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}