import axios from "axios";
import { Button, Label, FileInput } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../util/constant";

export default function Partners() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  useEffect(() => {
    fetchPartner();
  }, []);

  const fetchPartner = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/partner`);
      setData(data.data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('picture', file);

    try {
      const response = await axios.post(`${BASE_URL}/partner`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      fetchPartner();
      handleShowList();
    } catch (error) {
      console.error('Error adding partner:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log('Attempting to delete partner with id:', id);
      const requestData =  { id: id };
      
      const response = await axios({
        method: 'delete',
        url: `${BASE_URL}/partner`,
        data: requestData,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Delete response:', response.data.data);
      fetchPartner(); // Refresh the list after deletion
    } catch (error) {
      if (error.response) {
        console.error('Error deleting partner:', error.response.data.data);
      } else {
        console.error('Error deleting partner:', error.message);
      }
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" className="mr-4" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload Image" />
            </div>
            <FileInput id="file-upload" onChange={(e) => setFile(e.target.files[0])} required />
          </div>
          <div className="flex mt-8">
            <Button color="success" className="" type="submit">Save</Button>
            <Button color="failure" className="" type="button" onClick={handleShowList}>Cancel</Button>
          </div>
        </form>
      ) : (
        // List Component
        <div className="flex gap-5 flex-wrap">
          {data.map((partner) => (
            <div key={partner._id} className="relative">
              <Image src={partner.picture} width={100} height={100} alt="" />
              <Button
                color="failure"
                className="absolute top-0 right-0"
                onClick={() => handleDelete(partner._id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
