import React, { useState, useRef, useEffect } from 'react';
import DeleteIcon from '../icons/DeleteIcon';
import TextEditor from './TextEditor';
import { getEditMode, toggleEdit } from '../redux/reducers/editSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImg, editDescription, editTitle, getProduct, saveProductDetails } from '../redux/reducers/productSlice';

const ProductSection = () => {
    const productDetails = useSelector(getProduct);
    const {name , description , picture} = productDetails;
    const [details , setDetails] = useState({});
    const editMode = useSelector(getEditMode);
    const dispatch = useDispatch();
    const ref = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(()=> {
        if(editMode.product && ref.current){
            ref.current.focus();
            setDetails(prev => ({
                ...prev,
                picture, 
                name,
                description
            }));
        }
    }, [editMode.product])

    const handleTitleChange = e => {
        dispatch(editTitle({
            name: e.target.value,
        }))
    }

    const deletePicture = () => {
        //delete the pic of the product;
        dispatch(deleteImg({
            picture: ''
        }))
    }

    const cancelEdit = () => {
        dispatch(saveProductDetails({
            ...details 
        }));
        dispatch(toggleEdit({
            product: false,
        }))
    }

    const saveEdit = () => {
        dispatch(editDescription({
            description: descriptionRef.current.getContent(),
        }))
        dispatch(toggleEdit({
            product: false,
        }))
    }

    return (
        <div className="flex-col items-center bg-white border-1 rounded-sm border-slate-500 my-5 mx-1 w-3/5 max-lg:w-screen">
            {editMode.product && <button onClick={deletePicture} className="bg-gray-200 p-2 float-right"> <DeleteIcon/> </button>}
            {picture && <img src={picture} className="flex w-2/5 h-100  mx-auto mt-5" alt="product-img"/>}
            {
                editMode.product ? (
                    <input ref={ref} className=" text-lg text-center font-bold m-5 w-11/12 rounded-sm border-black" value={name} onChange={handleTitleChange}/>
                ): (
                    <div className="text-lg text-center font-bold mt-5">{name}</div>
                )
            }
            {
                editMode.product ? (
                    <div className='flex justify-center'>
                        <TextEditor ref={descriptionRef} className="w-11/12" id="mytextarea" content={description} />
                    </div>
                ): (
                    <div className="text-sm p-5 text-gray-500">{description}</div>
                )
            }
            {
                editMode.product && (
                    <div className='flex gap-2 justify-end mx-10 my-5'>
                        <button onClick={cancelEdit} className="bg-blue-800 text-white px-2 py-1 rounded-sm">Cancel</button>
                        <button onClick={saveEdit} className="bg-blue-800 text-white px-2 py-1 rounded-sm">Save</button>
                    </div>
                )
            }
        </div>
    )
};

export default ProductSection;