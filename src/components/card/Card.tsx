import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { CardProps } from "../../../type";


  const Card: React.FC<CardProps> = ({
    fullname,
    tagline,
    bio,
    facebook,
    instagram,
    linkedin,
    picture,
  }) => {
    return (
      <div className="w-96 p-5 shadow-xl mx-2">
        <div className="flex justify-center mb-4">
          <div className="h-24 w-24 relative">
            <Image
              src={picture}
              alt={fullname}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">{fullname}</h2>
          <p className="text-gray-600 text-sm">{tagline}</p>
          <p className="mt-2 text-gray-600 text-sm">{bio}</p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href={facebook} className="text-gray-500 hover:text-gray-700">
            <BsFacebook size={24} />
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <BsGithub size={24} />
          </Link>
          <Link href={instagram} className="text-gray-500 hover:text-gray-700">
            <BsInstagram size={24} />
          </Link>
          <Link href={linkedin} className="text-gray-500 hover:text-gray-700">
            <BsLinkedin size={24} />
          </Link>
        </div>
      </div>
    );
  };


  export default Card;