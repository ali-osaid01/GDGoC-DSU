"use client";
import { HiMail, HiLockClosed, HiInformationCircle } from "react-icons/hi";
import { Button, Label, TextInput, Alert, Toast } from "flowbite-react";
import { useState } from "react";
import Link from 'next/link';
import 'flowbite/dist/flowbite.css';
import axios from "axios";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../../../util/constant";
export default function SignInForm({ onSubmit, showAlert, alertMessage, inputColor, onForgotPassword }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}//login`, {
        email: email,
        password: password
      });

      if (response.status === 200) {
        router.push('/admin/dashboard');
      }
    } catch (error: any) {
      console.log(error);
      setError(error?.response?.data?.message)
    }

  }
  return (
    <form className="flex max-w-md flex-col gap-4" style={{ margin: '15%' }} >
      <h4 className='text-blue-600'>Sign in to manage</h4>
      <span className='text-blue-600' style={{ marginTop: '-5%' }}>Enter your details Below</span>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email" className="text-blue-600 text-lg" value="Email Address" />
        </div>
        <TextInput color={inputColor} icon={HiMail} id="email" type="email" placeholder="name@gdg.com" required onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" className="text-blue-600 text-lg" value="Password" />
          <Link href='#' style={{ display: 'flex', justifyContent: 'end', marginTop: '-6%', }} className="forP text-blue-600 text-md" onClick={onForgotPassword}>Forget Password?</Link>
        </div>
        <TextInput color={inputColor} icon={HiLockClosed} id="password" type="password" placeholder="Enter Password Here" required onChange={(e) => setPassword(e.target.value)} />
      </div>
      {showAlert && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">{alertMessage}</span>
        </Alert>
      )}
      <Button color="blue" type="submit" onClick={(e) => handleSubmit(e)}>Sign In</Button>
      {error && (
        <Toast color="failure">
          <span className="font-medium">{error}</span>
        </Toast>
      )}

    </form>


  );
}
