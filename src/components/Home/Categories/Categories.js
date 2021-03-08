import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [
    {name:'Lenovo',category:'laptop'},
    {name:'Asus',category:'laptop'},
    {name:'Dell',category:'laptop'},
    {name:'Samsung',category:'mobile'},
    {name:'Apple',category:'mobile'},
    {name:'Huawei',category:'mobile'},
    {name:'Nikon',category:'camera'},
    {name:'Canon',category:'camera'},
    {name:'Sony',category:'camera'}]


const Categories = () => {
    const [category,setCategory] = useContext(CategoryContext);
    const [product,setProduct] = useState([]);
    
    useEffect(()=>{
        const matchProduct = allProducts.filter(pd=>pd.category===category.toLowerCase())
        setProduct(matchProduct);
    },[category])
    return (
        <div>
            <h4>Select Your Category: {category}</h4>
            <button onClick={()=>setCategory('Laptop')}>Laptop</button>
            <button onClick={()=>setCategory('Mobile')}>Mobile</button>
            <button onClick={()=>setCategory('Camera')}>Camera</button>

            {
                product.map(pd=><CategoryDetails pd={pd}></CategoryDetails>)
            }
            
        </div>
    );
};

export default Categories;