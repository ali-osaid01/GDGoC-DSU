/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Button, Label, TextInput, FileInput, Textarea, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../util/constant";
import Card from "../../../../components/card/Card";

export default function Team() {
  const [showForm, setShowForm] = useState(false);
  const [leads, setLeads] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedTeamRecords, setSelectedTeamRecords] = useState("");
  const [selectedRoleRecords, setSelectedRoleRecords] = useState("");
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleShowList = () => {
    setShowForm(false);
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  useEffect(() => {
    if (selectedTeamRecords || selectedRoleRecords) {
      fetchTeam();
    }
  }, [selectedTeamRecords, selectedRoleRecords]);

  const fetchTeam = async () => {
    try {
      let url = `${BASE_URL}/teams?`;
      if (selectedTeamRecords === "Team Lead") {
        url += 'role=lead';
      } else if (selectedTeamRecords === "Executive-Core-Team-Member") {
        url += 'role=Executive-core-team-member';
      } else if (selectedTeamRecords === "Core Team Member") {
        if (selectedRoleRecords) {
          url += `team=${selectedRoleRecords.toLowerCase().replace(/\s/g, '-')}`;
        }
      } else if (selectedTeamRecords) {
        url += `team=${selectedTeamRecords.toLowerCase().replace(/\s/g, '-')}`;
      }

      console.log("Fetching data from URL:", url);

      const { data } = await axios.get(url);
      setLeads(data.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleTeamRecordsChange = (e) => {
    setSelectedTeamRecords(e.target.value);
  };

  const handleRoleRecordsChange = (e) => {
    setSelectedRoleRecords(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/teams?id=${id}`);
      fetchTeam(); // Refresh the list after deleting an item
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const formData = new FormData();
    formData.append('fullname', name);
    formData.append('picture', file);
    formData.append('bio', description);
    formData.append('tagline', title);
    formData.append('facebook', facebook);
    formData.append('linkedin', linkedin);
    formData.append('instagram', instagram);
    formData.append('email', email);

    if (role !== "lead" && role !== "Executive-core-team-member") {
      formData.append('team', selectedTeam);
    }
    
    if (role !== "Core Team Member") {
      formData.append('role', role);
    }

    try {
      const response = await axios.post(`${BASE_URL}/teams`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      fetchTeam();
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

  return (
    <>
      <div className="flex justify-end mb-4 space-x-2">
        <Button color="blue" onClick={handleShowForm}>Add New</Button>
        <Button color="blue" onClick={handleShowList}>Records</Button>
      </div>
      {showForm ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="role" value="Role" />
            <Select id="role" onChange={handleRoleChange} required>
              <option value="">Select Role</option>
              <option value="lead">Team Lead</option>
              <option value="Executive-core-team-member">Executive Core Team Member</option>
              <option value="Core Team Member">Core Team Member</option>
            </Select>
          </div>
          {role === "Core Team Member" && (
            <div>
              <Label htmlFor="team" value="Team" />
              <Select id="team" onChange={handleTeamChange} required>
                <option value="">Select Team</option>
                <option value="marketing">Marketing</option>
                <option value="operation">Operation</option>
                <option value="development">Development</option>
              </Select>
            </div>
          )}
          <div>
            <Label htmlFor="name" value="Full Name" />
            <TextInput id="name" type="text" placeholder="Enter Name Here" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="file-upload" value="Upload Image" />
            <FileInput id="file-upload" onChange={(e) => setFile(e.target.files[0])} required />
          </div>
          <div>
            <Label htmlFor="description" value="Bio" />
            <Textarea id="description" placeholder="Leave a comment..." required rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="title" value="Tag Line" />
            <TextInput id="title" type="text" placeholder="Enter Tagline" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="facebook" value="Facebook" />
            <TextInput id="facebook" type="text" placeholder="Enter link Here" required value={facebook} onChange={(e) => setFacebook(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="linkedin" value="LinkedIn" />
            <TextInput id="linkedin" type="text" placeholder="Enter link Here" required value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="instagram" value="Instagram" />
            <TextInput id="instagram" type="text" placeholder="Enter link Here" required value={instagram} onChange={(e) => setInstagram(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput id="email" type="email" placeholder="Enter Email Here" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Button color="success" type="submit">Save</Button>
            <Button color="failure" type="button" onClick={handleShowList}>Cancel</Button>
          </div>
        </form>
      ) : (
        <div>
          <div className="flex justify-between mb-4">
            <div>
              <Select id="team-records" onChange={handleTeamRecordsChange} required>
                <option value="">Select Team</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Core Team Member">Core Team Member</option>
                <option value="Executive-Core-Team-Member">Executive-Core-Team-Member</option>
              </Select>
            </div>
          </div>
          {selectedTeamRecords === "Core Team Member" && (
            <div className="flex justify-between mb-4">
              <div>
                <Select id="role-records" onChange={handleRoleRecordsChange} required>
                  <option value="">Select Role</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operation">Operation</option>
                  <option value="Development">Development</option>
                </Select>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full flex flex-wrap">
            {leads.map((lead, index) => (
              <div key={index} className="flex flex-col">
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
                />
                <Button color="failure" onClick={() => handleDelete(lead._id)} className="mt-1 w-20">Delete</Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
