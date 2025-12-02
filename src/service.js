import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export default {

  // שליפת משימות
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/tasks`);
    return result.data;
  },

  // הוספת משימה
  addTask: async (name) => {
  
    const result = await axios.post(`${apiUrl}/tasks`, {
      name: name,
      isComplete: false
    });
    return result.data;
  },

  // שינוי סטטוס משימה
  setCompleted: async (id, isComplete) => {
   
    const result = await axios.put(`${apiUrl}/tasks/${id}`, {
      id,
      isComplete,
      name: undefined // יתעדכן מהשרת אם צריך
    });
    return result.data;
  },

  // מחיקת משימה
  deleteTask: async (id) => {
    
    const result = await axios.delete(`${apiUrl}/tasks/${id}`);
    return result.data;
  }
};
