import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import profilephoto from '/public/user.jpg';

const ProfilePage = () => {
return (
    <>
        <NavBar />
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
                <Image 
                    src={profilephoto} 
                    alt="User" 
                    width={100} 
                    height={100} 
                    className="mx-auto rounded-full" />
                <div className="text-center mt-4">
                    <h2 className="text-xl font-bold">Jeethan Roche</h2>
                    <p className="text-gray-600">CSE Data Science Scholar</p>
                    <p className="mt-2">I am Jeethan Roche, CSE data science student @SJEC, i am very passionate about learning new stuff which 
                            is present in the field of computer science. <br></br>I am a person who is very much interested in coding and also in learning new things.
                    </p>
                </div>
            </div>
        </div>
        <Footer />
    </>
);
};

export default ProfilePage;