import axios from 'axios';

// const URL = `http://localhost:5000/api/v1`; OLD LOCAL URL
const URL = `https://siteecommerceapi.herokuapp.com/api/v1`;
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGYyOWFiOWY1Mjg5OWFmZDg3MzJhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTQ0MzU5MSwiZXhwIjoxNjQxNTI5OTkxfQ.2UYUeS5A_qnN2W4ChMCnP2K7klZv2pBNvwXKxibGGnU`;

// NON-USER searching
export const publicRequest = axios.create({
  baseURL: URL,
});

// USER searching
export const userRequest = axios.create({
  baseURL: URL,
  header: { token: `Bearer ${TOKEN}` },
});
