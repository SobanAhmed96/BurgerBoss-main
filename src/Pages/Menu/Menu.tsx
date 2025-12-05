const Menu = () => {
  const items = [
    { name: 'Classic Burger', price: '$5.99' },
    { name: 'Cheese Burger', price: '$6.49' },
    { name: 'Spicy Boss Burger', price: '$7.49' },
    { name: 'Fries Combo', price: '$3.99' },
  ];

  return (
    <div className="px-3 py-6">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400">Menu (Dummy)</h1>
      <p className="text-sm text-gray-300 mb-4">
        This is sample menu data. You can replace it later with real products.
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center bg-gray-900 border border-gray-800 rounded-xl px-4 py-3"
          >
            <span className="font-medium text-white">{item.name}</span>
            <span className="font-semibold text-yellow-300">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;


