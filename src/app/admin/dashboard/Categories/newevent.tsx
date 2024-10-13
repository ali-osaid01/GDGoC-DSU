import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { BASE_URL } from "../../../../util/constant";


export default function NewEvent() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

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
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea id="description" placeholder="Leave a comment..." required rows={4} />
        </div>
        <div className="flex mt-8">
            <Button color="success" className="">Save</Button>
            <Button color="failure" className="">Delete</Button>
        </div>
        </form>
        
      ) : (
        // List Component
        <Image width={1000} height={100} src='/Highlights1.svg' alt=""></Image>
      )}
    </>
  );
}
