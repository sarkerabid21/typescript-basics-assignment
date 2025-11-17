function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    } 
    else {
        return value;
    }
}

function getLength(value: string | any[]){
    if(typeof value === "string"){
        return value.length;
    }
    else if( Array.isArray(value)){
        return value.length;
    }
    else {
        return 0;
    }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter((item) => 
    item.rating >= 4);
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  return users.filter((user) => user.isActive === true);
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  
  const result: (number | string)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        found = true;
        break;
      }}
    if (!found) {
      result[result.length] = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}


function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {

  if (products.length === 0) {
    return 0;
  }

  const total = products
    .map((product) => {
      let totalPrice = product.price * product.quantity;
      if (product.discount !== undefined) {
        const discountAmount = (totalPrice * product.discount) / 100;
        totalPrice = totalPrice - discountAmount;
      }
      return totalPrice;
    }).reduce((sum, value) => sum + value, 0);
  return total;
}



