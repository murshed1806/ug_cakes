import axios from 'axios';
import React from 'react';

const instance = axios.create({
  baseURL: 'http://localhost:5173', // server url
});

const useAxiosSquer = () => {
    return instance;
};

export default useAxiosSquer;