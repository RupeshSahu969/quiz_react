export const loadData = (key) => {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (e) {
    return undefined;
  }
};

export const saveQuiz = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};