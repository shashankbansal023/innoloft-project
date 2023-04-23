import React, {useState , useEffect, useCallback } from 'react';
import CategoriesIcon from '../icons/CategoriesIcon';
import BusinessModelIcon from '../icons/BusinessModelIcon';
import TrlIcon from '../icons/TrlIcon';
import CostsIcon from '../icons/CostsIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getEditMode, toggleEdit } from '../redux/reducers/editSlice';
import { getProductDetails, editCost, saveDetails, editCategories, editBusinessModels } from '../redux/reducers/detailsSlice';
import { TRL_API_URL } from '../helper';

const DetailsSection = () => {

    const editMode = useSelector(getEditMode);
    const productDetails = useSelector(getProductDetails);
    const [productDetailsCopy, setProductDetailsCopy] = useState({});
    const dispatch = useDispatch();
    const [trlList , setTrlList] = useState([]);

    const changeCategories = (e , index) => {
        const allCategories = [...productDetails.categories];

        allCategories[index] = {...allCategories[index] , name: e.target.value};

        dispatch(editCategories({
            categories: [...allCategories]
        }))
    }

    const changeBusinessModels = (e ,index) => {
        const allBusinessModels = [...productDetails.businessModels];
        
        allBusinessModels[index] = {...allBusinessModels[index] , name: e.target.value}

        dispatch(editBusinessModels({
            businessModels: [...allBusinessModels],
        }));
        
    }

    // const changeTrl = () => {
    // }

    const fetchTrlList = useCallback(async() => {
        try{
            const res = await fetch(TRL_API_URL);
            const result = await res.json();
    
            console.log("result debug" , result);
            setTrlList([...result]);
        }
        catch(err){
            console.log("err debug");
        }
       
    } , [])

    const changeInvestmentEffort = (e) => {
        dispatch(editCost({
            investmentEffort: e.target.value
        }))
    }

    useEffect(() => {
        if(editMode.details ){
            fetchTrlList();
            setProductDetailsCopy({...productDetails})
        }
    }, [editMode.details])

    const handleTrlChange = (e) => {
        
    }

    const cancelEdit = () => {
        dispatch(saveDetails({
            ...productDetailsCopy
        }));
        dispatch(toggleEdit({
            details: false,            
        }))
    }

    const saveEdit = () => {
        dispatch(toggleEdit({
            details: false,            
        }))
    }

    return (
        <div className="flex flex-col w-4/5 bg-white m-5 p-5 h-max">
            <div className="text-sm my-2 font-bold">Details Section</div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-2">
                    <CategoriesIcon />
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-gray-500">Categories</div>
                        <div className="flex flex-wrap gap-2">
                            {
                                productDetails.categories.map((item, index) => {
                                    return (
                                        editMode.details ? (
                                            <input className='px-5 py-1 text-xs rounded-full text-gray-400 bg-zinc-200' value={item.name} onChange={(e) => changeCategories(e , index)}/> 
                                        ): (
                                         <div className='px-5 py-1 text-xs rounded-full text-gray-400 bg-zinc-200'>{item.name}</div>
                                        )
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <BusinessModelIcon />
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-gray-500">Business Models</div>
                        <div className="flex flex-wrap gap-2">
                            {
                                productDetails.businessModels.map((item, index) => {
                                    return (
                                        editMode.details ? (
                                            <input className='px-5 py-1 text-xs rounded-full text-gray-400 bg-zinc-200' value={item.name} onChange={e => changeBusinessModels(e, index)}/>
                                        ): (
                                        <div className="px-5 py-1 text-xs rounded-full text-gray-400 bg-zinc-200">{item.name}</div>
                                        )
                                    )
                                })
                            }
                        </div>   
                    </div>
                </div>
                <div className="flex gap-2">
                    <TrlIcon/>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-gray-500">TRL</div>
                        <div className="flex">
                            {
                                editMode.details ? (
                                <select value={productDetails.trl.name} onChange={handleTrlChange}>
                                        {
                                            trlList.map((item) => {
                                                return (
                                                    <option value={item.name}>{item.name}</option>
                                                )
                                            })
                                        }
                                </select>
                                ): (
                            <div className="text-xs px-5 py-1 rounded-full text-gray-400 bg-zinc-200">{productDetails.trl.name}</div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <CostsIcon />
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-gray-500">Costs</div>
                        {
                            editMode.details ? (
                                <input className='flex text-xs rounded-full px-5 py-1 text-gray-400 bg-zinc-200' value={productDetails.investmentEffort} onChange={changeInvestmentEffort} />
                            ): (
                             <div className="flex text-xs rounded-full px-5 py-1 text-gray-400 bg-zinc-200">{productDetails.investmentEffort}</div>
                            )   
                        }
                    </div>
                </div>

            </div>
            {
                editMode.details && (
                    <div className="flex justify-end gap-2 mt-5">
                    <button className='bg-blue-800 text-white px-2 py-1 rounded-sm' onClick={cancelEdit}>Cancel</button>
                    <button className='bg-blue-800 text-white px-2 py-1 rounded-sm' onClick={saveEdit} >Save</button>
                </div>
                )
            }
           
        </div>
    )
};

export default DetailsSection;