import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Community() {
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
            <Label htmlFor="years" value="Years" />
          </div>
          <TextInput id="years" type="text" placeholder="Enter years here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="attendees" value="Attendees" />
          </div>
          <TextInput id="attendees" type="text" placeholder="Enter attendees here" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="events" value="Events" />
          </div>
          <TextInput id="events" type="text" placeholder="Enter events Here" required />
        </div>
        
        <div className="flex mt-8">
            <Button color="success" className="">Save</Button>
            <Button color="failure" className="">Delete</Button>
        </div>
        </form>
        
      ) : (
        // List Component
        <p>1 2 3</p>
      )}
    </>
  );
}
