import axios from 'axios';
import queryString from 'query-string';
import { ApartmentInterface, ApartmentGetQueryInterface } from 'interfaces/apartment';
import { GetQueryInterface } from '../../interfaces';

export const getApartments = async (query?: ApartmentGetQueryInterface) => {
  const response = await axios.get(`/api/apartments${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createApartment = async (apartment: ApartmentInterface) => {
  const response = await axios.post('/api/apartments', apartment);
  return response.data;
};

export const updateApartmentById = async (id: string, apartment: ApartmentInterface) => {
  const response = await axios.put(`/api/apartments/${id}`, apartment);
  return response.data;
};

export const getApartmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/apartments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteApartmentById = async (id: string) => {
  const response = await axios.delete(`/api/apartments/${id}`);
  return response.data;
};
