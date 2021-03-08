import React, { useContext } from 'react';
import { CategoryContext } from '../../../App';

const CategoryDetails = (props) => {
    const {name} = props.pd;
    // const [category] = useContext(CategoryContext);
    return (
        <div>
            <h4>This is from category Details: {name}</h4>
        </div>
    );
};

export default CategoryDetails;