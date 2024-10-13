import axios from "axios";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { FileInput } from "flowbite-react";
import { Textarea } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { BASE_URL } from "../../../../util/constant";

export default function Events() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('speakers');
  
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [speaker, setSpeaker] = useState('');
  const [speakerImage, setSpeakerImage] = useState(null);
  const [speakerName, setSpeakerName] = useState('');
  const [speakerLinkedIn, setSpeakerLinkedIn] = useState('');
  const [speakerBio, setSpeakerBio] = useState('');
  const [topEvent, setTopEvent] = useState('true'); 

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  const fetchFilteredData = useCallback(async () => {
    const endpoint = filter === 'speakers' 
      ? `${BASE_URL}/event?topEvent=true&speaker=true`
      : `${BASE_URL}/event?topEvent=true`;
    const { data } = await axios.get(endpoint);
    setData(data.data);
  }, [filter]);

  useEffect(() => {
    fetchFilteredData();
  }, [fetchFilteredData]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('picture', file);
    formData.append('content', content);
    formData.append('title', title);
    formData.append('location', location);
    formData.append('speaker', speaker);
    formData.append('speakerImage', speakerImage);
    formData.append('speakerName', speakerName);
    formData.append('SpeakerBio', speakerBio);
    formData.append('speakerLinkedln', speakerLinkedIn);
    formData.append('topEvent', topEvent); 

    try {
      const response = await axios.post(`${BASE_URL}/event`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      fetchFilteredData(); 
      handleShowList();
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
      } else if (error.request) {
        console.error('Error request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/event?id=${id}`);
      fetchFilteredData();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4 space-x-2">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        // Form Component
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name" value="Event Name" />
            <TextInput id="name" type="text" placeholder="Enter Event Name Here" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="file-upload" value="Upload Event Image" />
            <FileInput id="file-upload" onChange={(e) => setFile(e.target.files[0])} required />
          </div>
          <div>
            <Label htmlFor="content" value="Event Content" />
            <Textarea id="content" placeholder="Leave a comment..." required rows={4} value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="title" value="Event Title" />
            <TextInput id="title" type="text" placeholder="Enter Title Here" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="location" value="Event Location" />
            <TextInput id="location" type="text" placeholder="Enter Location Here" required value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="speaker" value="Speaker" />
            <TextInput id="speaker" type="text" placeholder="Enter Speaker Here" required value={speaker} onChange={(e) => setSpeaker(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="speakerImage" value="Upload Speaker Image" />
            <FileInput id="speakerImage" onChange={(e) => setSpeakerImage(e.target.files[0])} required />
          </div>
          <div>
            <Label htmlFor="speakerName" value="Speaker Name" />
            <TextInput id="speakerName" type="text" placeholder="Enter Speaker Name" required value={speakerName} onChange={(e) => setSpeakerName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="speakerBio" value="Speaker Bio" />
            <Textarea id="speakerBio" placeholder="Enter Speaker Bio..." required rows={4} value={speakerBio} onChange={(e) => setSpeakerBio(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="speakerLinkedIn" value="Speaker LinkedIn" />
            <TextInput id="speakerLinkedIn" placeholder="Enter Speaker LinkedIn Profile..." value={speakerLinkedIn} onChange={(e) => setSpeakerLinkedIn(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="topEvent" value="Top Event" />
            <Select id="topEvent" onChange={(e) => setTopEvent(e.target.value)} required value={topEvent}>
              <option value="true">True</option>
              <option value="false">False</option>
            </Select>
          </div>
          <div className="flex mt-8">
            <Button color="success" className="mr-4" type="submit">Save</Button>
            <Button color="failure" className="" type="button" onClick={handleShowList}>Cancel</Button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex justify-between mb-4">
            <div>
              <Select id="filter" onChange={handleFilterChange} value={filter}>
                <option value="speakers">Speakers</option>
                <option value="events">Top Events</option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filter === 'speakers' ? (
              data.map((speaker, index) => (
                <SpeakerCard key={index} content={speaker.content} image={speaker.speakerImage} name={speaker.speakerName}/>
              ))
            ) : (
              data.map((item, index) => (
                <div key={index} className="relative">
                  <Image 
                    width={200} 
                    height={200} 
                    src={item.picture} 
                    alt={`Event ${index + 1}`} 
                    className="rounded-full"
                  />
                  <Button 
                    color="failure" 
                    className="absolute top-2 right-2" 
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}

const SpeakerCard = ({ image, name, content }) => {
  return (
    <div className="p-4 shadow-lg w-64 h-64 mb-4">
      <div className="flex justify-center">
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
    </div>
  );
}
