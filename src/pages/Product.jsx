import React, { useState , useEffect } from 'react';
import Header from '../components/Header';
import UserDetails from '../components/UserDetails';
import ProductSection from '../components/ProductSection';
import MapSection from '../components/MapSection';
import VideoSection from '../components/VideoSection';
import DetailsSection from '../components/DetailsSection';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {
    saveProductDetails,
} from '../redux/reducers/productSlice';
import {
    saveDetails, 
} from '../redux/reducers/detailsSlice';
import { changeUserDetails} from '../redux/reducers/userSlice';
import { editVideoUrl } from '../redux/reducers/videoSlice';
import { getEditMode , toggleEdit } from '../redux/reducers/editSlice';
import { API_URL, CONFIGURATION_URL } from '../helper';

const Product = () => {

    const dispatch = useDispatch();
    const edit = useSelector(getEditMode);
    const [hideUserSection , setHideUserSection] = useState(false);

    const navigate = useNavigate();

    const fetchProductData = async() => {
        try{
            const res = await fetch(API_URL);
            const result = await res.json();

            console.log("result debug" , result);

            dispatch(saveProductDetails({
                name: result.name, 
                picture: result.picture,
                description : result.description,
            }));

            dispatch(changeUserDetails({
                company: result.company,
                details: result.user                   
            }));

             dispatch(saveDetails({
                businessModels: result.businessModels,
                categories : result.categories,
                investmentEffort : result.investmentEffort,
                trl: result.trl,
            }))

            dispatch(editVideoUrl({
                url: result.video.replace('/watch?v=', '/embed/'),
            }));
        }
        catch(err){
            console.log("err debug" , err);
        }
    };

    const fetchConfiguration = async() => {
        const res = await fetch(CONFIGURATION_URL);
        const result = await res.json();
        if(!result.hasUserSection){ 
            setHideUserSection(true);
        }
    }

    useEffect(() => {
        fetchProductData();
        fetchConfiguration();
    }, [])


    const switchToEditMode = () => {
        navigate('/product/edit');
        dispatch(toggleEdit({
            product: true,
            video: true,
            details: true
        }))
    }

    useEffect(()=> {
        if(Object.values(edit).every(item => item === false)){
            navigate('/product');
        }
    }, [edit, navigate])

    return (
        <>
            <Header />
                <div className="flex w-full bg-gray-200">
                    <UserDetails />
                    <div className="flex flex-col w-4/5 max-lg:w-full max-lg:items-center">
                        {Object.values(edit).every(item => item === false) && <button onClick={switchToEditMode} className="inline-flex bg-blue-800 w-max px-4 py-1 text-white rounded-sm m-2 mx-auto mr-60">Edit</button>}
                        <div className="flex w-11/12 ml-5  h-max border-1 border-gray-700 rounded-sm max-lg:w-4/5 max-lg:ml-0">
                            <ProductSection /> 
                            {!hideUserSection && <MapSection  />}
                        </div>  
                        <VideoSection />
                        <DetailsSection />
                    </div>  
                </div>
        </>
    )
};

export default Product;