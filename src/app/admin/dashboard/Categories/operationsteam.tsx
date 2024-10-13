import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import Card from "../../../../components/card/Card";
import { BASE_URL } from "../../../../util/constant";

export default function GDSCLeads() {
  const [showForm, setShowForm] = useState(false);
  const [leads, setLeads] = useState([]);
  
  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  useEffect(() => {
    fetchLeads()
  }
  , []);

  const fetchLeads = async () => {
    const {data} = await axios.get(`${BASE_URL}/teams?team=operation`);
    console.log(data.data);
    setLeads(data.data);
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
              <Label htmlFor="facebook" value="Facebook" />
            </div>
            <TextInput id="facebook" type="text" placeholder="Enter link Here" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="linkedin" value="LinkedIn" />
            </div>
            <TextInput id="linkedin" type="text" placeholder="Enter link Here" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="instagram" value="Instagram" />
            </div>
            <TextInput id="instagram" type="text" placeholder="Enter link Here" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput id="email" type="email" placeholder="Enter Email Here" required />
          </div>
          <div className="flex mt-4">
            <Button color="success" className="mr-4">Save</Button>
            <Button color="failure" className="ml-20">Delete</Button>
          </div>
        </form>

      ) : (
        <div className="w-full flex flex-wrap">
            {leads.map((lead,index)=>{
              return(
                <Card
               bio={lead.bio}
               email={lead.email}
                facebook={lead.facebook}
                fullname={lead.fullname}
                instagram={lead.instagram}
                linkedin={lead.linkedin}
                picture={lead.picture}
                role={lead.role}
                tagline={lead.tagline}
                key={index}

                />
              )
            })}
          </div>

      )}
    </>
  );
}
