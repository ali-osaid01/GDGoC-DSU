"use client";
import { useState } from 'react';
import { HiMail, HiInformationCircle } from "react-icons/hi";
import { Button, Label, TextInput, Alert } from "flowbite-react";
import 'flowbite/dist/flowbite.css';

export default function ForgotPasswordForm({ onSubmit, showAlert, alertMessage, inputColor, onBack }) {
  return (
    <form className="flex max-w-md flex-col gap-4" style={{ margin: '15%' }} onSubmit={onSubmit}>
      <h4 className='text-blue-600'>Forgot Password?</h4>
      <span className='text-blue-600' style={{ marginTop: '-5%' }}>Enter your details Below</span>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email" className="text-blue-600 text-lg" value="Email Address" />
        </div>
        <TextInput color={inputColor} id="email" icon={HiMail} type="email" placeholder="name@gdg.com" required />
      </div>
      {showAlert && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Please Enter your Email</span>
        </Alert>
      )}
      <Button color="blue" type="submit">Reset Password</Button>
      <Button color="light" onClick={onBack}>Back</Button>
    </form>
  );
}