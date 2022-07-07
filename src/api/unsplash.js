import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 23wHCF_yytwoKSLcl7HHo-n7Uj7eGrsxJ028BxHTN7w'
  }
});