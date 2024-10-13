import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {  BsLinkedin } from 'react-icons/bs';
import { BASE_URL } from "../../../../util/constant";

export default function Speakers() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSpeakers()
  },[]);

  const fetchSpeakers = async () => {
    const {data} = await axios.get(`${BASE_URL}/event?topEvent=true&speaker=true`);
    setData(data.data);
  }
  return (
    <>
      <div className="flex justify-end mb-4">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" className="mr-4" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput id="name" type="text" placeholder="Enter Name Here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput id="title" type="text" placeholder="Enter Title Here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Upload Image" />
          </div>
          <FileInput id="file-upload" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea id="description" placeholder="Leave a comment..." required rows={4} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="linkedin" value="LinkedIn" />
          </div>
          <TextInput id="linkedin" type="text" placeholder="Enter link Here" required />
        </div>
        
        <div className="flex mt-8">
            <Button color="success" className="">Save</Button>
            <Button color="failure" className="">Delete</Button>
        </div>
        </form>
        
      ) : (
        // List Component
        <div className="flex  gap-5  flex-wrap">
         {data.map((speaker, index) => (
           <SpeakerCard key={index} content={speaker.content} image={speaker.speakerImage} name={speaker.speakerName}/>
          ))}
           </div>
      )}
    </>
  );
}

const SpeakerCard = ({image,name,content}) =>{
return(
  <>
   <div className="p-4 shadow-lg  w-64 h-64 mb-4">
            <div className="flex justify-center ">
              <div className="h-24 w-24 relative">
                <Image
                  src={image}
                  alt="Image of the speaker"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800">{name}</h2>
              <p className="text-gray-600 text-sm">{content}</p>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <BsLinkedin size={24} />
              </a>
            </div>
          </div>
  </>
)
}