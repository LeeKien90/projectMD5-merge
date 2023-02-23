import axios from 'axios';
import { BASE_URL_CATEGORIESLIST, BASE_URL_COLORLIST, BASE_URL_PRODUCTLIST, BASE_URL_USERLIST } from '../constants/constantsLink'

const categoriesURL = BASE_URL_CATEGORIESLIST;
const productURL = BASE_URL_PRODUCTLIST;
const userURL = BASE_URL_USERLIST;
const colorURL = BASE_URL_COLORLIST

// Categories
export const getDataCategories = async (id) => {
    id = id || "";
    return await axios.get(`${categoriesURL}/${id}`);
};

export const addDataCategories = async (categories) => {
    return await axios.post(categoriesURL, categories);
};

export const updateDataCategories = async (id, categories) => {
    return await axios.put(`${categoriesURL}/${id}`, categories);
};

export const deleteDataCategories = async (id) => {
    return await axios.delete(`${categoriesURL}/${id}`);
};

// Product
export const getDataProduct = async (id) => {
    id = id || "";
    return await axios.get(`${productURL}/${id}`);
};

export const addDataProduct = async (product) => {
    return await axios.post(productURL, product);
};

export const updateDataProduct = async (id, product) => {
    return await axios.put(`${productURL}/${id}`, product);
};

export const deleteDataProduct = async (id) => {
    return await axios.delete(`${productURL}/${id}`);
};

// user
export const getDataUser = async (id) => {
    id = id || "";
    return await axios.get(`${userURL}/${id}`);
};

export const addDataUser = async (user) => {
    return await axios.post(userURL,user);
};

export const updateDataUser = async (id, user) => {
    return await axios.put(`${userURL}/${id}`, user);
};

export const deleteDataUser = async (id) => {
    return await axios.delete(`${userURL}/${id}`);
};

export const getDataColor = async (id) => {
    id = id || "";
    return await axios.get(`${colorURL}/${id}`);
};