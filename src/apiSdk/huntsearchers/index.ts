import axios from 'axios';
import queryString from 'query-string';
import { HuntsearcherInterface, HuntsearcherGetQueryInterface } from 'interfaces/huntsearcher';
import { GetQueryInterface } from '../../interfaces';

export const getHuntsearchers = async (query?: HuntsearcherGetQueryInterface) => {
  const response = await axios.get(`/api/huntsearchers${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createHuntsearcher = async (huntsearcher: HuntsearcherInterface) => {
  const response = await axios.post('/api/huntsearchers', huntsearcher);
  return response.data;
};

export const updateHuntsearcherById = async (id: string, huntsearcher: HuntsearcherInterface) => {
  const response = await axios.put(`/api/huntsearchers/${id}`, huntsearcher);
  return response.data;
};

export const getHuntsearcherById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/huntsearchers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHuntsearcherById = async (id: string) => {
  const response = await axios.delete(`/api/huntsearchers/${id}`);
  return response.data;
};
