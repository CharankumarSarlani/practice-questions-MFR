// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (number) { return number & 1 === 0; };

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const filterLongWords = function (words) {
  return words.filter(function (string) { return string.length > 5; });
};

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter(function (person) { return person > 30; });
};

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = function (users) {
  return users.filter(function (user) { return user.active; });
};

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) { };

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) { };

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  return users.filter(function (user) { return user.profileComplete; });
};

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = function (students) { };

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = function (products) { };

// For date comparisons
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

// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const getProductPriceByAttr = function (attribute) {
  return function (product) {
    return product[attribute];
  };
};

const sum = function (number1, number2) { return number1 + number2; };

const filterBelowAveragePrice = function (products) {
  const getProductPrice = getProductPriceByAttr("price");
  const totalPrice = products.map(getProductPrice).reduce(sum, 0);
  const averagePrice = totalPrice / products.length;

  return products.filter(function (product) {
    return getProductPrice(product) < averagePrice;
  });
};

// active users who posted in the last 7 days [{username: "alice", lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: "2024-11-20", active: true}] => [{username: "alice", lastPostDate: "2024-12-01", active: true}]
const filterRecentActiveUsers = function (users) { };

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]
const isAllSubjectsPassed = function (subjects) {
  return subjects.every(function (subject) {
    return subject.passed;
  });
};

const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter(function (student) {
    return isAllSubjectsPassed(student.subjects);
  });
};

// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const filterBirthdaysThisMonth = function (people) { };

// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const filterHighValueOrders = function (orders) {
  const prices = orders.map(getProductPriceByAttr("amount"));
  const totalPrice = prices.reduce(sum, 0);
  const averagePrice = totalPrice / orders.length;

  return orders.filter(function (order) {
    return order.amount > averagePrice;
  });
};

// books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}] => [{title: "Book 2", rating: 5}]
const filterTopRatedBooks = function (books) { };

// employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]
const filterHighSalaryEmployees = function (employees) { };

// cities with a population higher than the median [{name: "City A", population: 2000}, {name: "City B", population: 5000}, {name: "City C", population: 3000}] => [{name: "City B", population: 5000}]
const filterCitiesAboveMedianPopulation = function (cities) { };

// posts with more than the average number of likes [{postId: 1, likes: 100}, {postId: 2, likes: 200}, {postId: 3, likes: 150}] => [{postId: 2, likes: 200}]
const filterPopularPosts = function (posts) { };

// users who have posted more than the average number of posts [{username: "Alice", postCount: 5}, {username: "Bob", postCount: 8}, {username: "Charlie", postCount: 3}] => [{username: "Bob", postCount: 8}]
const filterActiveUsersByPostCount = function (users) { };

// filter people older than a certain age [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 22}] => [{name: "Bob", age: 30}]
const filterByAge = function (people, age) {
  return people.filter(function (person) {
    return person.age === age;
  });
};

// filter products that are cheaper than a given price [{name: "item1", price: 20}, {name: "item2", price: 50}, {name: "item3", price: 10}] => [{name: "item1", price: 20}, {name: "item3", price: 10}]
const filterByPrice = function (products, price) { };

// filter students who scored above a certain grade in Math [{name: "John", grades: {math: 80, science: 90}}, {name: "Jane", grades: {math: 70, science: 85}}] => [{name: "John", grades: {math: 80, science: 90}}]
const filterByMathGrade = function (students, grade) { };

// filter events that occur before a certain date [{name: "Event1", date: "2024-12-01"}, {name: "Event2", date: "2024-11-15"}] => [{name: "Event2", date: "2024-11-15"}]
const filterByDate = function (events, date) { };

// filter employees who earn more than a certain salary [{name: "Alice", salary: 5000}, {name: "Bob", salary: 7000}] => [{name: "Bob", salary: 7000}]
const filterBySalary = function (employees, salary) { };

// filter orders with a quantity greater than a given number [{orderId: 1, quantity: 10}, {orderId: 2, quantity: 5}] => [{orderId: 1, quantity: 10}]
const filterByQuantity = function (orders, quantity) { };

// filter books published after a certain year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterByYear = function (books, year) { };

// filter students with a grade higher than a given threshold in a specific subject [{name: "Alice", grades: {math: 90, science: 80}}, {name: "Bob", grades: {math: 70, science: 85}}] => [{name: "Alice", grades: {math: 90, science: 80}}]
const filterBySubjectGrade = function (students, subject, threshold) {
  return students.filter(function (student) {
    return student.grades[subject] > threshold;
  });
};

// filter photos with a minimum number of likes [{id: 1, likes: 100}, {id: 2, likes: 50}] => [{id: 1, likes: 100}]
const filterByLikes = function (photos, likes) { };

// filter users who have made a certain number of posts [{username: "Alice", posts: 10}, {username: "Bob", posts: 5}] => [{username: "Alice", posts: 10}]
const filterByPostCount = function (users, postCount) { };

// Apply a discount to each item's price, then filter for items under a certain price [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item2", price: 45}]
const filterDiscountedItems = function (items, discount, maxPrice) { };

// Convert product names to uppercase, then filter for products with names longer than a certain number [{name: "apple"}, {name: "banana"}] => [{name: "APPLE"}]
const filterLongProductNames = function (products, minLength) { };

// Group users by their age, then filter for specific age groups [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAgeGroups = function (users, ageGroup) { };

// Convert grades to letter grades, then filter for students who passed [{name: "Alice", grade: 90}, {name: "Bob", grade: 55}] => [{name: "Alice", grade: 90}]
const filterPassingGrades = function (students, passingGrade) {
  const grades = ["A", "B", "C"];


};

// Calculate VAT-inclusive prices, then filter for those over a certain threshold [{name: "item1", price: 100}, {name: "item2", price: 50}] => [{name: "item1", price: 120}]
const filterHighPriceWithVAT = function (products, vatRate, threshold) { };

// Calculate the length of each name, then filter for names longer than a given number [{name: "Alice"}, {name: "Bob"}] => [{name: "Alice"}]
const filterLongNames = function (people, minLength) { };

// Normalize scores to a standard range, then filter for students who passed [{name: "John", score: 50}, {name: "Jane", score: 80}] => [{name: "Jane", score: 80}]
const filterNormalizedScores = function (students, minScore) { };

// Convert book publication dates, then filter for books published after a given year [{title: "Book1", year: 2020}, {title: "Book2", year: 2022}] => [{title: "Book2", year: 2022}]
const filterRecentBooks = function (books, yearThreshold) { };

// Count the number of posts for each user, then filter for users with more than a specific number of posts [{username: "Alice", posts: 100}, {username: "Bob", posts: 50}] => [{username: "Alice", posts: 100}]
const filterActivePosters = function (users, postThreshold) { };

// Convert students' grades to letter grades, then filter for students who received a specific grade [{name: "Alice", grade: 90}, {name: "Bob", grade: 85}] => [{name: "Alice", grade: 90}]
const filterSpecificGrade = function (students, grade) {

};

// Filter products based on category and price threshold [{category: {type: "electronics"}, name: "Laptop", price: 800}, {category: {type: "furniture"}, name: "Chair", price: 150}] => [{category: {type: "electronics"}, name: "Laptop", price: 800}]
const filterByCategoryAndPrice = function (products, category, maxPrice) { };

// Filter users based on their activity level and registration date [{profile: {username: "Alice", status: "active"}, registration: {date: "2020-05-01"}}] => [{profile: {username: "Alice", status: "active"}, registration: {date: "2020-05-01"}}]
const filterActiveUsersByDate = function (users, status, dateThreshold) { };

// Filter orders where the customer's balance is above a certain threshold and the order total is under a certain amount [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}] => [{customer: {name: "Alice", balance: 1000}, order: {total: 200}}]
const filterOrdersByBalanceAndTotal = function (orders, balanceThreshold, totalThreshold) { };

// Filter articles based on author name and publish date [{author: {name: "Alice"}, content: "Article 1", publishDate: "2021-01-01"}] => [{author: {name: "Alice"}, content: "Article 1", publishDate: "2021-01-01"}]
const filterArticlesByAuthorAndDate = function (articles, authorName, dateThreshold) { };

// Filter courses by instructor name and course rating [{instructor: {name: "John"}, course: {rating: 4.5}}] => [{instructor: {name: "John"}, course: {rating: 4.5}}]
const filterCoursesByInstructorAndRating = function (courses, instructorName, ratingThreshold) { };

// Filter projects by team size and completion status [{team: {members: ["Alice", "Bob"], size: 2}, project: {completed: false}}] => [{team: {members: ["Alice", "Bob"], size: 2}, project: {completed: false}}]
const filterProjectsByTeamSizeAndStatus = function (projects, teamSizeThreshold, status) { };

// Filter job candidates based on years of experience and their skills [{skills: {languages: ["JavaScript", "Python"]}, experience: {years: 5}}] => [{skills: {languages: ["JavaScript", "Python"]}, experience: {years: 5}}]
const filterCandidatesByExperienceAndSkills = function (candidates, experienceThreshold, requiredSkills) { };

// Filter events based on location and date [{location: {city: "New York"}, date: {eventDate: "2022-07-01"}}] => [{location: {city: "New York"}, date: {eventDate: "2022-07-01"}}]
const filterEventsByLocationAndDate = function (events, city, dateThreshold) { };

// Filter customers based on region and membership status [{region: {country: "USA", state: "California"}, membership: {status: "gold"}}] => [{region: {country: "USA", state: "California"}, membership: {status: "gold"}}]
const filterCustomersByRegionAndStatus = function (customers, region, status) { };

// Filter tasks based on assignee's role and priority level [{assignee: {role: "developer"}, task: {priority: "high"}}] => [{assignee: {role: "developer"}, task: {priority: "high"}}]
const filterTasksByRoleAndPriority = function (tasks, role, priorityLevel) { };

// Filter teams where at least one member is from a specific department [{team: {name: "Dev Team", members: [{name: "Alice", department: "Engineering"}, {name: "Bob", department: "Marketing"}]}}] => [{team: {name: "Dev Team", members: [{name: "Alice", department: "Engineering"}, {name: "Bob", department: "Marketing"}]}}]
const filterTeamsByDepartment = function (teams, department) { };

// Filter products where one of the reviews has a rating above a threshold [{name: "Laptop", reviews: [{rating: 4.5}, {rating: 3.2}]}] => [{name: "Laptop", reviews: [{rating: 4.5}, {rating: 3.2}]}]
const filterProductsByReviewRating = function (products, minRating) { };

// Filter orders where one of the items is below a certain price [{order: {items: [{product: "Shirt", price: 25}, {product: "Shoes", price: 50}]}}] => [{order: {items: [{product: "Shirt", price: 25}, {product: "Shoes", price: 50}]}}]
const filterOrdersByItemPrice = function (orders, maxPrice) { };

// Filter events where at least one speaker is a particular person [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}] => [{event: {name: "Tech Talk", speakers: [{name: "John"}, {name: "Alice"}]}}]
const filterEventsBySpeaker = function (events, speakerName) { };

// Filter students where at least one class has a passing grade [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}] => [{student: {name: "Tom", classes: [{name: "Math", grade: "B"}, {name: "History", grade: "C"}]}}]
const filterStudentsByClassGrade = function (students, passingGrade) { };

// Filter employees where at least one project has been completed [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}] => [{employee: {name: "Alice", projects: [{name: "Project X", completed: true}, {name: "Project Y", completed: false}]}}]
const filterEmployeesByCompletedProject = function (employees) { };

// Filter courses where at least one module has been completed [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}] => [{course: {title: "JavaScript 101", modules: [{name: "Intro", completed: true}, {name: "Advanced", completed: false}]}}]
const filterCoursesByCompletedModule = function (courses) { };

// Filter organizations where one of the branches has a high rating [{organization: {name: "Tech Co", branches: [{name: "NYC", rating: 4.5}, {name: "LA", rating: 3.8}]}}] => [{organization: {name: "Tech Co", branches: [{name: "NYC", rating: 4.5}, {name: "LA", rating: 3.8}]}}]
const filterOrganizationsByBranchRating = function (organizations, minRating) { };

// Filter candidates where at least one job experience is in a specific industry [{candidate: {name: "Alice", experiences: [{company: "Tech Inc", industry: "Software"}, {company: "Retail Corp", industry: "Retail"}]}}] => [{candidate: {name: "Alice", experiences: [{company: "Tech Inc", industry: "Software"}, {company: "Retail Corp", industry: "Retail"}]}}]
const filterCandidatesByIndustryExperience = function (candidates, industry) { };

// Filter cars where at least one feature is electric [{car: {model: "Tesla", features: [{type: "electric", name: "autopilot"}, {type: "gas", name: "V6 engine"}]}}] => [{car: {model: "Tesla", features: [{type: "electric", name: "autopilot"}, {type: "gas", name: "V6 engine"}]}}]
const filterCarsByFeatureType = function (cars, featureType) { };

// Filter teams where at least one member has a specific skill [{team: {name: "Dev Team", members: [{name: "Alice", skills: ["JavaScript", "React"]}, {name: "Bob", skills: ["Python", "Django"]}]}}] => [{team: {name: "Dev Team", members: [{name: "Alice", skills: ["JavaScript", "React"]}, {name: "Bob", skills: ["Python", "Django"]}]}}]
const filterTeamsBySkill = function (teams, skill) { };

// Filter students where at least one grade is above a certain threshold [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}] => [{student: {name: "Tom", grades: [{subject: "Math", grade: 85}, {subject: "English", grade: 72}]}}]
const filterStudentsByGrade = function (students, minGrade) { };

// Filter books where at least one author has won a specific award [{book: {title: "Book 1", authors: [{name: "Author A", awards: ["Pulitzer"]}, {name: "Author B", awards: ["Nobel"]}]}}] => [{book: {title: "Book 1", authors: [{name: "Author A", awards: ["Pulitzer"]}, {name: "Author B", awards: ["Nobel"]}]}}]
const filterBooksByAward = function (books, award) { };

// Filter users where at least one post has more than a specific number of likes [{user: {name: "John", posts: [{title: "Post 1", likes: 150}, {title: "Post 2", likes: 20}]}}] => [{user: {name: "John", posts: [{title: "Post 1", likes: 150}, {title: "Post 2", likes: 20}]}}]
const filterUsersByPostLikes = function (users, minLikes) { };

// Filter cities where at least one attraction is in a specific category [{city: {name: "Paris", attractions: [{name: "Eiffel Tower", category: "landmark"}, {name: "Louvre", category: "museum"}]}}] => [{city: {name: "Paris", attractions: [{name: "Eiffel Tower", category: "landmark"}, {name: "Louvre", category: "museum"}]}}]
const filterCitiesByAttractionCategory = function (cities, category) { };

// Filter courses where at least one student is enrolled in more than one course [{course: {name: "JavaScript", students: [{name: "Tom", enrolledCourses: ["Math", "JavaScript"]}, {name: "Alice", enrolledCourses: ["JavaScript"]}]}}] => [{course: {name: "JavaScript", students: [{name: "Tom", enrolledCourses: ["Math", "JavaScript"]}, {name: "Alice", enrolledCourses: ["JavaScript"]}]}}]
const filterCoursesByMultipleEnrollments = function (courses) { };

// Filter restaurants where at least one menu item is vegetarian [{restaurant: {name: "Vegan Bistro", menu: [{item: "Tofu Stir Fry", type: "vegetarian"}, {item: "Chicken Salad", type: "non-vegetarian"}]}}] => [{restaurant: {name: "Vegan Bistro", menu: [{item: "Tofu Stir Fry", type: "vegetarian"}, {item: "Chicken Salad", type: "non-vegetarian"}]}}]
const filterRestaurantsByVegetarianMenuItem = function (restaurants) { };

// Filter employees where at least one project is high priority [{employee: {name: "Jane", projects: [{name: "Project A", priority: "high"}, {name: "Project B", priority: "low"}]}}] => [{employee: {name: "Jane", projects: [{name: "Project A", priority: "high"}, {name: "Project B", priority: "low"}]}}]
const filterEmployeesByHighPriorityProject = function (employees) { };

// Filter orders where at least one item is from a specific category [{order: {items: [{name: "Laptop", category: "Electronics"}, {name: "Shoes", category: "Apparel"}]}}] => [{order: {items: [{name: "Laptop", category: "Electronics"}, {name: "Shoes", category: "Apparel"}]}}]
const filterOrdersByCategory = function (orders, category) { };

// Filter events where at least one speaker has a specific expertise [{event: {name: "Tech Talk", speakers: [{name: "Alice", expertise: "AI"}, {name: "Bob", expertise: "Web Development"}]}}] => [{event: {name: "Tech Talk", speakers: [{name: "Alice", expertise: "AI"}, {name: "Bob", expertise: "Web Development"}]}}]
const filterEventsBySpeakerExpertise = function (events, expertise) { };

// Filter users who have at least one post with more than a certain number of comments [{user: {name: "John", posts: [{title: "Post 1", comments: 100}, {title: "Post 2", comments: 5}]}}] => [{user: {name: "John", posts: [{title: "Post 1", comments: 100}, {title: "Post 2", comments: 5}]}}]
const filterUsersByPostComments = function (users, minComments) { };

// Filter users who have at least one post in a specific category [{user: {name: "Anna", posts: [{title: "Post 1", category: "Food"}, {title: "Post 2", category: "Travel"}]}}] => [{user: {name: "Anna", posts: [{title: "Post 1", category: "Food"}, {title: "Post 2", category: "Travel"}]}}]
const filterUsersByPostCategory = function (users, category) { };

// Filter users who have a certain number of followers and have posted in the last 30 days [{user: {name: "Tom", followers: 1000, lastPostDate: "2024-11-10"}}] => [{user: {name: "Tom", followers: 1000, lastPostDate: "2024-11-10"}}]
const filterRecentlyActiveUsers = function (users, minFollowers, daysAgo) { };

// Filter posts that have at least one hashtag from a list of trending hashtags [{post: {title: "Post 1", hashtags: ["#food", "#vegan"]}}] => [{post: {title: "Post 1", hashtags: ["#food", "#vegan"]}}]
const filterPostsByHashtags = function (posts, trendingHashtags) { };

// Filter users who have shared at least one post that received a specific number of likes [{user: {name: "Lucy", posts: [{title: "Post 1", likes: 500}, {title: "Post 2", likes: 100}]}}] => [{user: {name: "Lucy", posts: [{title: "Post 1", likes: 500}, {title: "Post 2", likes: 100}]}}]
const filterUsersByMinPostLikes = function (users, minLikes) { };

// Filter posts that have a certain number of comments and are from a specific location [{post: {title: "Post 1", comments: 150, location: "Paris"}}] => [{post: {title: "Post 1", comments: 150, location: "Paris"}}]
const filterPostsByCommentsAndLocation = function (posts, minComments, location) { };

// Filter users who have at least one post where the caption contains a specific word [{user: {name: "Sara", posts: [{title: "Post 1", caption: "Amazing sunset!"}, {title: "Post 2", caption: "Another day, another adventure!"}]}}] => [{user: {name: "Sara", posts: [{title: "Post 1", caption: "Amazing sunset!"}, {title: "Post 2", caption: "Another day, another adventure!"}]}}]
const filterUsersByPostCaption = function (users, word) { };

// Filter users who follow a certain number of accounts and have at least one post in the last week [{user: {name: "Jake", following: 200, lastPostDate: "2024-12-10"}}] => [{user: {name: "Jake", following: 200, lastPostDate: "2024-12-10"}}]
const filterUsersByFollowingAndRecentPosts = function (users, minFollowing, daysAgo) { };

// Filter posts from users who have more than a certain number of followers and at least one post with over a set number of comments [{post: {user: {name: "Chris", followers: 1200}, comments: 350}}] => [{post: {user: {name: "Chris", followers: 1200}, comments: 350}}]
const filterPostsByUserFollowersAndComments = function (posts, minFollowers, minComments) { };

// Filter users who have shared a post that has a specific hashtag and has been liked more than a set number [{user: {name: "Mia", posts: [{title: "Post 1", hashtags: ["#beach", "#sunset"], likes: 300}]}}] => [{user: {name: "Mia", posts: [{title: "Post 1", hashtags: ["#beach", "#sunset"], likes: 300}]}}]
const filterUsersByHashtagAndLikes = function (users, hashtag, minLikes) {

};

// Filter numbers from the first array that are present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterByMembership = function (numbers, criteria) { };

// Filter strings from the first array that appear in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "cherry", "date"]
// Output: ["banana", "cherry"]
const filterStringsByMembership = function (strings, criteria) { };

// Filter objects from the first array where the 'id' property is present in the second array
// Input: [{id: 1, name: "apple"}, {id: 2, name: "banana"}], [1, 3]
// Output: [{id: 1, name: "apple"}]
const filterObjectsById = function (objects, ids) { };

// Filter numbers from the first array that are found in the second array, and greater than a specific threshold
// Input: [1, 2, 3, 4, 5], [2, 4, 6], threshold: 3
// Output: [4]
const filterGreaterThanThresholdByMembership = function (numbers, criteria, threshold) { };

// Filter strings from the first array that have a length greater than a specified value and are present in the second array
// Input: ["apple", "banana", "cherry"], ["banana", "date"], length: 5
// Output: ["banana"]
const filterStringsByLengthAndMembership = function (strings, criteria, length) { };

// Filter numbers from the first array that are not present in the second array
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [1, 3, 5]
const filterByExclusion = function (numbers, criteria) { };

// Filter objects from the first array that contain properties in the second array
// Input: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}], ["color"]
// Output: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}]
const filterObjectsByProperties = function (objects, properties) { };

// Filter strings from the first array where the substring exists in the second array
// Input: ["hello", "world", "hell", "how"], ["hell", "hello"]
// Output: ["hello", "hell"]
const filterStringsBySubstringMembership = function (strings, criteria) { };

// Filter numbers from the first array that fall within a range specified by a pair in the second array
// Input: [1, 2, 3, 4, 5], [[2, 4]]
// Output: [2, 3, 4]
const filterByRange = function (numbers, ranges) { };

// Filter numbers from the first array that are present in the second array and are even
// Input: [1, 2, 3, 4, 5], [2, 4, 6]
// Output: [2, 4]
const filterEvenNumbersByMembership = function (numbers, criteria) { };

// Find countries that exist based on a lookup object with country names as keys and existence status as values.
// Input: ["India", "USA", "Iran"], { "India": "exists", "USA": "does not exist", "Iran": "exists" }
// Output: ["India", "Iran"]
const findCountriesThatExist = function (countries, lookup) { };

// Find numbers that are marked as 'valid' in the lookup object.
// Input: [10, 20, 30, 40], {10: "valid", 20: "invalid", 30: "valid", 40: "valid"}
// Output: [10, 30, 40]
const findValidNumbers = function (numbers, lookup) { };

// Find users whose account status is 'active' from the lookup object.
// Input: ["Alice", "Bob", "Charlie"], { "Alice": { status: "active" }, "Bob": { status: "inactive" }, "Charlie": { status: "active" } }
// Output: ["Alice", "Charlie"]
const findActiveUsers = function (users, lookup) { };

// Find strings where the length of the string is greater than the corresponding numeric threshold in the lookup object.
// Input: ["apple", "banana", "kiwi"], { "apple": 4, "banana": 5, "kiwi": 6 }
// Output: ["banana"]
const findStringsAboveThreshold = function (strings, lookup) { };

// Find the products whose price is less than a given threshold from the lookup object.
// Input: ["Laptop", "Phone", "Tablet"], { "Laptop": { price: 1000 }, "Phone": { price: 500 }, "Tablet": { price: 300 } }
// Output: ["Phone", "Tablet"]
const findAffordableProducts = function (products, lookup) { };

// Find students who have scored more than a given score in their exam from the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": 85, "Alice": 92, "Bob": 70 }
// Output: ["John", "Alice"]
const findHighScoringStudents = function (students, lookup) { };

// Find employees who have been at the company for more than 5 years based on the lookup object.
// Input: ["John", "Alice", "Bob"], { "John": { yearsAtCompany: 6 }, "Alice": { yearsAtCompany: 4 }, "Bob": { yearsAtCompany: 7 } }
// Output: ["John", "Bob"]
const findLongTermEmployees = function (employees, lookup) { };

// Find cities with a population greater than a threshold provided in the lookup object.
// Input: ["London", "Paris", "Tokyo"], { "London": { population: 9000000 }, "Paris": { population: 2200000 }, "Tokyo": { population: 14000000 } }
// Output: ["London", "Tokyo"]
const findLargeCities = function (cities, lookup) { };

// Find items in an inventory whose quantity is greater than 10 based on the lookup object.
// Input: ["item1", "item2", "item3"], { "item1": { quantity: 15 }, "item2": { quantity: 5 }, "item3": { quantity: 20 } }
// Output: ["item1", "item3"]
const findInStockItems = function (items, lookup) { };

// Find animals whose habitat matches the required type from the lookup object.
// Input: ["Lion", "Elephant", "Shark"], { "Lion": { habitat: "Jungle" }, "Elephant": { habitat: "Jungle" }, "Shark": { habitat: "Ocean" } } , "Jungle"
// Output: ["Lion", "Elephant"]
const findAnimalsByHabitat = function (animals, lookup) { };
