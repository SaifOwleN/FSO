import axios from "axios";
const URL = "http://localhost:3001/persons";

const getAll = () => axios.get(URL).then((Response) => Response.data);

const postAll = (Object) =>
  axios.post(URL, Object).then((Response) => Response.data);

const DeleteELE = (id) =>
  axios.delete(`${URL}/${id}`).then((Response) => Response.data);

const change = (id, Changed) => {
  return axios.put(`${URL}/${id}`, Changed).then((Response) => Response.data);
};


export default { getAll, postAll, DeleteELE, change };