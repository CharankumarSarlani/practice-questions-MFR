// Create a predicate to check if a given attribute has a truthy value
const createTruthyPredicate = function (attribute) {
  return function (object) {
    return Boolean(object[attribute]);
  };
};

// Filter users based on any truthy attribute (e.g., active users)
const filterUsersByAttribute = function (users, attribute) {
  const attributePredicate = createTruthyPredicate(attribute);
  return users.filter(attributePredicate);
};


const createAttributeComparator = function (key, threshold, comparisonFunction) {
  const comparison = comparisonFunction(threshold);

  return function (object) {
    return comparison(object[key]);
  };
};

//function for date filtrations
const dateCompare = function (threshold, date) {
  return (date).every(function (value, index) {
    return +value >= +threshold[index];
  });
};

const createDatePredicate = function (dateOffset, attribute) {
  const threshold = dateOffset.split("-");

  return function (object) {
    return dateCompare(threshold, object[attribute].split("-"));
  };
};

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const filterRecentOrders = function (orders) {
  const datePredicate = createDatePredicate("2024-12-01", "orderDate");

  return orders.filter(datePredicate);
};

console.log(filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }]));