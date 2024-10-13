"use client";
import { useState } from 'react';
import { HiMail, HiLockClosed, HiInformationCircle } from "react-icons/hi";
import { Button, Label, TextInput, Alert } from "flowbite-react";
import Link from 'next/link';

export default function SignInForm({ onSubmit, showAlert, alertMessage, inputColor, onForgotPassword }) {
  return (
    <form className="flex max-w-md flex-col gap-4" style={{ margin: '8%' }} onSubmit={onSubmit}>
      <h4 className='text-blue-600'>Sign in to manage</h4>
      <span className='text-blue-600' style={{ marginTop: '-5%' }}>Enter your details Below</span>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email" className="text-blue-600 text-lg" value="Email Address" />
        </div>
        <TextInput color={inputColor} id="email" type="email" icon={HiMail} placeholder="name@gdg.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" className="text-blue-600 text-lg" value="Password" />
          <Link href='#' className="forP text-blue-600 text-md" onClick={onForgotPassword}>Forget Password?</Link>
        </div>
        <TextInput color={inputColor} id="password" icon={HiLockClosed} type="password" placeholder="Enter Password Here" required />
      </div>
      {showAlert && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">{alertMessage}</span>
        </Alert>
      )}
      <Button color="blue"  type="submit">Sign In</Button>
    </form>
  );
}
