export default class Repository {
  static save(
    key,
    value
  ) {
    const valueString = JSON.stringify(value);

    try {
      localStorage.setItem(key, valueString);
    } catch (err) {
      console.error(err);
    }
  }

  static get(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (err) {
      console.error(err);
    }

    return null;
  }
}
