import React, {useEffect, useState} from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import getData from "../../api/api";
import {hostname,endpoints} from "../../constants/global";

const PropertyListing = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        getData(`${hostname}${endpoints.getProperties}`)
            .then(data => setProperties(data));
    },[]);
    
    if(properties.length > 0){
        return (
            <div className="PropertyListing">
                {
                    properties
                        .map((property, index) => <PropertyCard key={index} {...property}/>)
                }
            </div>
        )
    } else {
        return (
            <div>Sorry there are no properties</div>
        )
    }
};

export default PropertyListing;
