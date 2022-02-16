class localData {
  static fetch() {
    if (localStorage.getItem('todos') === null) {
      JSON.localStorage.setItem('todos', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('todos'));
  }

  static update(data) {
    localStorage.setItem('todos', JSON.stringify(data));
  }
}

export default localData;
