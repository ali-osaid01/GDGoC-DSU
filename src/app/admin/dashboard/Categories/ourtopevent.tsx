import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";
import Image from "next/image";
import { BASE_URL } from "../../../../util/constant";
import { useEffect, useState } from "react";

export default function OurTopEvent() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEvents()
  },[]);

  const fetchEvents = async () => {
    const {data} = await axios.get(`${BASE_URL}/event?topEvent=true`);
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
            <Label htmlFor="file-upload" value="Upload Image" />
          </div>
          <FileInput id="file-upload" />
        </div>
        <div className="flex mt-8">
            <Button color="success" className="">Save</Button>
            <Button color="failure" className="">Delete</Button>
        </div>
        </form>
      ) : (
        // List Component
        <div className="flex flex-wrap">
        {data.map((item, index) => (
          <Image 
            key={index}
            width={100} 
            height={100} 
            src={item.picture} 
            alt={`Image ${index + 1}`} 
          />
        ))}
      </div>
      )}
    </>
  );
}
