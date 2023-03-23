import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 1000,
   
  });



  export async function getContacts() {
    const contacts = await instance.get('?results=10&?nat=BR')
    return contacts.data.results
  }