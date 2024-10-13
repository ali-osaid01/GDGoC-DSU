"use client";
import { Button, Drawer, TextInput, Label, Sidebar } from "flowbite-react";
import 'flowbite/dist/flowbite.css';
import Image from "next/image";
import { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import Swal from 'sweetalert2';
import './dasboard.css'
import dynamic from 'next/dynamic';
const Categories = dynamic(() => import('./Menus/Categories'), { ssr: false });
const ContactList = dynamic(() => import('./Menus/ContactList'), { ssr: false });
import {
  HiChartPie,
  HiLogin,
  HiSearch,
} from "react-icons/hi";
import { HiMenu } from "react-icons/hi";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState("GDG");
  const [lastName, setLastName] = useState("GDG");
  const [username, setUsername] = useState("gdglead.admin");
  const [email, setEmail] = useState("gdgdsu@gmail.com");

  const handleDrawerClose = () => setIsOpen(false);
  const handleDrawerOpen = () => setIsOpen(true);
  const handleEdit = () => setEditMode(true);
  const handleSave = () => {
    setEditMode(false);
    Swal.fire({
      icon: 'success',
      title: 'Details Saved',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const [isSideOpen, setIsSideOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('categories');
  const handleSideClose = () => setIsSideOpen(false);

  const handleSignOut = () => {
    // Perform sign out actions here
    // For example, clear session or cookies

    // Redirect using window.location
    window.location.href = '/admin';
  };

  return (
    <>
      <div className="min-h-[50vh] flex items-center justify-between p-4">
        <div className="flex items-center">
          <Button color="blue" onClick={() => setIsSideOpen(true)}>
            <HiMenu className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center">
          <div className="cursor-pointer" onClick={handleDrawerOpen}>
            <Image src="/dashboard.svg" width={80} height={80} alt="Dashboard" />
          </div>
        </div>
      </div>

      <Drawer open={isSideOpen} onClose={handleSideClose}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Button color="white" onClick={() => { setActiveComponent('categories'); setIsSideOpen(false); }}>
                      <HiChartPie className="mr-2 h-5 w-5" />
                      Categories
                    </Button>
                    <Button color="white" onClick={() => { setActiveComponent('contact'); setIsSideOpen(false); }}>
                      <HiOutlineBell className="mr-2 h-5 w-5" />
                      Contact List
                    </Button>
                    <Button color="white" onClick={handleSignOut}>
                      <HiLogin className="mr-2 h-5 w-5" />
                      Sign Out
                    </Button>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>

      <div className="container mx-auto mt-4">
        {activeComponent === 'categories' && <Categories />}
        {activeComponent === 'contact' && <ContactList />}
      </div>

      <Drawer open={isOpen} onClose={handleDrawerClose} position="right">
        <Drawer.Header title="Profile Information" />
        <Drawer.Items>
          <div className="flex justify-center">
            <Image src="/dashboard.svg" width={100} height={100} alt="" />
          </div>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            {editMode ? (
              <TextInput id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            ) : (
              <h6 className="para">{firstName}</h6>
            )}
            <br />
            <Label htmlFor="lastName">Last Name</Label>
            {editMode ? (
              <TextInput id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            ) : (
              <h6>{lastName}</h6>
            )}
            <br />
            <Label htmlFor="username">Username</Label>
            {editMode ? (
              <TextInput id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            ) : (
              <h6>{username}</h6>
            )}
            <br />
            <Label htmlFor="email">Email</Label>
            {editMode ? (
              <TextInput type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              <h6>{email}</h6>
            )}
          </div>
          <br />
          {editMode ? (
            <Button color="blue" type="button" onClick={handleSave}>Save</Button>
          ) : (
            <Button color="blue" type="button" onClick={handleEdit}>Edit Details</Button>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Dashboard;
