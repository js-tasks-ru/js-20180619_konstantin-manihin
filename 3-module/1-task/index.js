/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let list = [];

  data.forEach(function(item, i, arr) {
    if ( item.age <= age ) {
      list.push(`${item.name}, ${item.balance}`);
    }
  });

  return list.join('\n');
}