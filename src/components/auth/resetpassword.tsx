"use client";
import { useState } from 'react';
import { HiLockClosed, HiInformationCircle } from "react-icons/hi";
import { Button, Label, TextInput, Alert } from "flowbite-react";

export default function ResetPasswordForm({ onSubmit, showAlert, alertMessage, inputColor, onBack, onPasswordChange, onConfirmPasswordChange }) {
  return (
    <form className="flex max-w-md flex-col gap-4" style={{ margin: '8%' }} onSubmit={onSubmit}>
      <h4 className='text-blue-600'>Reset Password</h4>
      <span className='text-blue-600' style={{ marginTop: '-5%' }}>Enter your details Below</span>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="new-password" className="text-blue-600 text-lg" value="New Password" />
        </div>
        <TextInput color={inputColor} id="new-password" icon={HiLockClosed} type="password" placeholder="Enter New Password Here" required onChange={onPasswordChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="confirm-password" className="text-blue-600 text-lg" value="Confirm Password" />
        </div>
        <TextInput color={inputColor} id="confirm-password" icon={HiLockClosed} type="password" placeholder="Confirm New Password Here" required onChange={onConfirmPasswordChange} />
      </div>
      {showAlert && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">{alertMessage}</span>
        </Alert>
      )}
      <Button color="blue" type="submit">Reset Password</Button>
      <Button color="light" onClick={onBack}>Back</Button>
    </form>
  );
}
