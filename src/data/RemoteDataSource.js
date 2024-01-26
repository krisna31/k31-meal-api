export default class RemoteDataSource {
  static searchMeal(query) {
    return new Promise((resolve, reject) => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.meals) {
            resolve(responseJson.meals);
          } else {
            reject(`${query} is not found`);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
