import axios from "axios";

const createEntity = async (entity: string) => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_URL}${entity}`, [
      {},
    ]);
    return data[entity][0].id;
  } catch (error) {
    console.log(error);
  }
};

export default createEntity;
