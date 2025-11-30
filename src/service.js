import axios from 'axios';
const apiUrl = "http://localhost:5036"

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/tasks`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    return {};
  },

  deleteTask:async()=>{
    console.log('deleteTask')
  }
};
