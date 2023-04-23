import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../redux/reducers/userSlice';

const UserDetails = () => {

    const userDetails = useSelector(fetchUser);
    const {firstName , lastName , profilePicture } = userDetails.details;
    const { name: companyName } = userDetails.company;

    return (
        <div className="max-lg:hidden flex-col w-1/5 h-screen">
            <div className="flex items-center gap-10 justify-center mt-5 ml-auto">
                <img src={profilePicture} className='w-10 rounded-full' alt="profile-pic"/>
                <div className='flex-col'>
                    <div className="text-sm">
                        {firstName}{` `}{lastName}
                    </div>
                    <div className="flex text-sm">{companyName}</div>
                </div>
            </div>
            <div className="flex gap-10 justify-around ml-10 mt-5">
                <Link to={'/'}>Home</Link>
            </div>
        </div>    
    )
};

export default UserDetails;