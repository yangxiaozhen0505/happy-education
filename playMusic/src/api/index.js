import axios from 'axios';
export function getSong(){
  return axios.get('/api/s')
}
export function getOneSong(id){
  return axios.get('/api/s?id='+id)
}
