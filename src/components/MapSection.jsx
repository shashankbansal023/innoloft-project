import React from 'react';
import MapIcon from '../icons/MapIcon';
import { useSelector } from 'react-redux';
import { fetchUser } from '../redux/reducers/userSlice';

const MapSection = () => {

    const userDetails = useSelector(fetchUser);
    const { name , logo , address } = userDetails.company ;
    
    const { firstName , lastName , profilePicture } = userDetails.details;
    
    return (
        <div className="max-lg:hidden flex flex-col gap-5 w-3/7 px-5 mt-5 bg-white my-5">
            <div className="text-black mt-5">Offered by</div>
            <img src={logo} className="h-10 w-100" alt="company-logo"/>
            <div className="flex justify-start">
                <img src={profilePicture} alt="profile-pic" className="rounded-full w-10 h-10"/>
                <div className="flex-col ml-5">
                    <div className="flex">{firstName}{` `}{lastName}</div>
                    <div className="text-gray-400 font-light text-sm">{name}</div>
                </div>
            </div>
            <div className="flex items-start">
                <MapIcon/>
                <div className="flex-col text-gray-400 text-sm">
                    <div className="flex">{address?.street} {` `} {address?.house}</div>
                    <div className="flex">{address?.zipCode} {` `}{address?.city.name}{` `} {address?.country.name}</div>
                </div>
            </div>
        </div>
    )
};

export default MapSection;