
export const getLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  };
  
export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

