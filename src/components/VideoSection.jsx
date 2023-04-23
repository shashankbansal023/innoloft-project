import React, { useState, useRef, useEffect } from 'react';
import { getVideoUrl , editVideoUrl } from '../redux/reducers/videoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getEditMode, toggleEdit } from '../redux/reducers/editSlice';

const VideoSection = () => {
    
    const videoRef = useRef(null)
    const dispatch = useDispatch();
    const video = useSelector(getVideoUrl);
    const [link , setLink ] = useState('');
    const editMode = useSelector(getEditMode);

    useEffect(() => {
        setLink(video.url);
        if(editMode.video && videoRef.current){
            videoRef.current.focus();
        }
    }, [editMode.video]) 


    const handleChangeUrl = e => {
        setLink(e.target.value);
    }

    const cancelEdit = () => {
        dispatch(toggleEdit({
            video: false,
        }))
    }

    const saveEdit = () => {
        dispatch(editVideoUrl({
            url: link,
        }));
        dispatch(toggleEdit({
            video: false,
        }))
    }

    return (
        <div className="flex flex-col w-4/5 p-10 m-5 bg-white">
            <h1 className="flex mb-5 font-bold">Video</h1>
            {
                editMode.video ? (
                    <input ref={videoRef} className="text-sm p-2 border-black rounded-sm" value={link} onChange={handleChangeUrl} />
                ): (
                    <iframe 
                    src={video.url}
                    // width="500"
                    height="480"
                    frameborder='0'
                    title='video'
                />
                )
            }
           {
            editMode.video && (
                <div className='flex justify-end gap-2 mt-5'>
                    <button className='p-2 rounded-sm bg-blue-800 text-white' onClick={cancelEdit}>Cancel</button>
                    <button className='p-2 rounded-sm bg-blue-800 text-white' onClick={saveEdit}>Save</button>
                 </div>
            )
            
           }
        </div>
    )
};

export default VideoSection;