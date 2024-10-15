const tShirtData = [
  {
    title: 'Blue T-Shirt',
    image: '/images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: '/images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/grey-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

const TShirtList = () => {
  const [tShirts, setTShirts] = React.useState(() => {
    return JSON.parse(localStorage.getItem('savedTShirts')) || tShirtData
  });
  const buyHandler = (shirt) => {
    const newQuantity = parseInt(shirt.quantity);
    const newStock = shirt.stock - newQuantity;
    const updatedTShirts = tShirts.map((t) => {
      if (t === shirt) {
        return { ...t, stock: newStock };
      }
      return t;
    });
    setTShirts(updatedTShirts);
  };

  React.useEffect(() => {
    localStorage.setItem('savedTShirts', JSON.stringify(tShirts))
  }, [JSON.stringify(tShirts)])
  return (
    <div>
      {tShirts.map((shirt, index) => (
        <div key={index} style={{ border: "1px solid #ddd", margin: "20px", padding: "10px" }}>
          <h2>{shirt.title}</h2>
          <img src={shirt.image} alt={shirt.title} style={{ width: "150px" }} />
          <p>Price: ${shirt.price.toFixed(2)}</p>
          <p>{shirt.stock > 0 ? `Stock: ${shirt.stock}` : "Out of Stock"}</p>

          {shirt.stock > 0 && (
            <>
              <select
                value={shirt.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value);
                  const updatedShirt = { ...shirt, quantity: newQuantity };
                  const updatedTShirts = tShirts.map((t) => {
                    if (t === shirt) {
                      return updatedShirt;
                    }
                    return t;
                  });
                  setTShirts(updatedTShirts);
                }}
              >
                {[...Array(shirt.stock)].map((_, qty) => (
                  <option key={qty + 1} value={qty + 1}>
                    {qty + 1}
                  </option>
                ))}
              </select>
              <button onClick={() => buyHandler(shirt)}>Buy</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

