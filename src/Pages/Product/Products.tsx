import foodImg from "../../assets/foodImage1.webp";

export const foods: any = [
  { id: 1, name: "Pizza", category: "Fast Food", price: 500, image: foodImg },
  { id: 2, name: "Burger", category: "Fast Food", price: 250, image: foodImg },
  { id: 3, name: "Sushi", category: "Japanese", price: 800, image: foodImg },
  { id: 4, name: "Pasta", category: "Italian", price: 600, image: foodImg },
  { id: 5, name: "Salad", category: "Healthy", price: 300, image: foodImg },
  { id: 6, name: "Taco", category: "Mexican", price: 350, image: foodImg },
  { id: 7, name: "Ramen", category: "Japanese", price: 750, image: foodImg },
  { id: 8, name: "Lasagna", category: "Italian", price: 650, image: foodImg },
  { id: 9, name: "Chicken Wings", category: "Fast Food", price: 400, image: foodImg },
  { id: 10, name: "Smoothie", category: "Healthy", price: 200, image: foodImg },
  { id: 11, name: "Nachos", category: "Mexican", price: 300, image: foodImg },
  { id: 12, name: "Tempura", category: "Japanese", price: 700, image: foodImg },
  { id: 13, name: "Spaghetti", category: "Italian", price: 600, image: foodImg },
  { id: 14, name: "Cheeseburger", category: "Fast Food", price: 350, image: foodImg },
  { id: 15, name: "Greek Salad", category: "Healthy", price: 320, image: foodImg },
  { id: 16, name: "Burrito", category: "Mexican", price: 400, image: foodImg },
  { id: 17, name: "Sashimi", category: "Japanese", price: 900, image: foodImg },
  { id: 18, name: "Fettuccine", category: "Italian", price: 620, image: foodImg },
  { id: 19, name: "Fries", category: "Fast Food", price: 150, image: foodImg },
  { id: 20, name: "Fruit Bowl", category: "Healthy", price: 250, image: foodImg },
  { id: 21, name: "Quesadilla", category: "Mexican", price: 350, image: foodImg },
  { id: 22, name: "Udon", category: "Japanese", price: 780, image: foodImg },
  { id: 23, name: "Pizza Margherita", category: "Italian", price: 550, image: foodImg },
  { id: 24, name: "Hot Dog", category: "Fast Food", price: 300, image: foodImg },
  { id: 25, name: "Kale Salad", category: "Healthy", price: 280, image: foodImg },
  { id: 26, name: "Enchiladas", category: "Mexican", price: 420, image: foodImg },
  { id: 27, name: "Yakitori", category: "Japanese", price: 650, image: foodImg },
  { id: 28, name: "Ravioli", category: "Italian", price: 610, image: foodImg },
  { id: 29, name: "Onion Rings", category: "Fast Food", price: 200, image: foodImg },
  { id: 30, name: "Avocado Toast", category: "Healthy", price: 300, image: foodImg },
  { id: 31, name: "Chocolate Cake", category: "Desserts", price: 400, image: foodImg },
  { id: 32, name: "Ice Cream Sundae", category: "Desserts", price: 350, image: foodImg },
  { id: 33, name: "Lemonade", category: "Beverages", price: 150, image: foodImg },
  { id: 34, name: "Coffee", category: "Beverages", price: 200, image: foodImg },
  { id: 35, name: "Grilled Salmon", category: "Seafood", price: 900, image: foodImg },
  { id: 36, name: "Shrimp Pasta", category: "Seafood", price: 850, image: foodImg },
  { id: 37, name: "Mochi", category: "Desserts", price: 300, image: foodImg },
  { id: 38, name: "Green Tea", category: "Beverages", price: 120, image: foodImg },
  { id: 39, name: "Ceviche", category: "Seafood", price: 700, image: foodImg },
  { id: 40, name: "Churros", category: "Desserts", price: 250, image: foodImg },
];

const Products = ({filterProducts}:any) => {

  return (
    <div className=" md:m-40 sm:10 m-10 mt-0 mb-10">
      <h1 className="font-bold text-3xl text-center mb-8">All Products</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {filterProducts.map((product: any) => (
          <div
            key={product.id}
            className="bg-yellow-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5 flex flex-col items-center gap-2">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-500">{product.category}</p>
              <button className="mt-3 bg-yellow-200 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition">
                ${product.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
