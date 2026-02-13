import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';


const CakeDitails = () => {

    // get param to url
    const {id} = useParams();
    // console.log('name', id)

    // cakes data fetching
    const {data: cakes} = useQuery({
        queryKey: ['cakes'],
        queryFn: async () => {
            const res = await axios.get('/cakes.json')
            // console.log(res.data) 
            return res.data
        }
    })

    // findout single cake
    const singleCake = cakes?.find((cake) => cake?.id == id)
    console.log(singleCake)

    return (
        <div>
            CakeDitails {id}
            <p>{singleCake?.title}</p>
        </div>
    );
};

export default CakeDitails;