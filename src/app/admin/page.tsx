'use client';
import { useState } from 'react';
import 'flowbite/dist/flowbite.css';
import dynamic from 'next/dynamic';
import Swal from 'sweetalert2';
import Image from 'next/image';
import SignInForm from './auth/signin';
import ForgotPasswordForm from './auth/forgotpassword';
import ResetPasswordForm from './auth/resetpassword';

export default function Admin() {
    const [currentForm, setCurrentForm] = useState('signin');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [inputColor, setInputColor] = useState("primary");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setAlertMessage('Email Address or Password is incorrect');
        setInputColor("failure");
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (!email) {
            setShowAlert(true);
            setAlertMessage('Please enter your email');
            setInputColor("failure");
        } else {
            const otp = Math.floor(1000 + Math.random() * 9000);

            Swal.fire({
                icon: 'info',
                title: 'OTP Verification',
                text: `An OTP has been sent to your email. Please enter the OTP: ${otp}`,
                input: 'text',
                inputAttributes: {
                    maxLength: '4',
                    autocapitalize: 'off',
                    autocorrect: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Submit',
                cancelButtonText: 'Cancel',
                preConfirm: (enteredOTP) => {
                    return new Promise((resolve) => {
                        if (enteredOTP === otp.toString()) {
                            resolve(true);
                        } else {
                            Swal.showValidationMessage('Incorrect OTP');
                            resolve(false);
                        }
                    });
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    setCurrentForm('resetpassword');
                }
            });
        }
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setShowAlert(true);
            setAlertMessage('Passwords do not match');
            setInputColor("failure");
        } else {
            setShowAlert(false);
            setCurrentForm('signin');
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <div className="p-8">
                {currentForm === 'signin' && (
                    <SignInForm
                        onSubmit={handleSubmit}
                        showAlert={showAlert}
                        alertMessage={alertMessage}
                        inputColor={inputColor}
                        onForgotPassword={() => setCurrentForm('forgotpassword')}
                    />
                )}

                {currentForm === 'forgotpassword' && (
                    <ForgotPasswordForm
                        onSubmit={handleResetPassword}
                        showAlert={showAlert}
                        alertMessage={alertMessage}
                        inputColor={inputColor}
                        onBack={() => setCurrentForm('signin')}
                    />
                )}

                {currentForm === 'resetpassword' && (
                    <ResetPasswordForm
                        onSubmit={handlePasswordReset}
                        showAlert={showAlert}
                        alertMessage={alertMessage}
                        inputColor={inputColor}
                        onBack={() => setCurrentForm('signin')}
                        onPasswordChange={(e) => setPassword(e.target.value)}
                        onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}
            </div>
            <div className="relative overflow-hidden">
                <Image src="/auth.svg" alt="Background" style={{marginLeft:'25%'}} width={580} height={450} />
            </div>
        </div>
    );
}
