import Guitar from "./components/Guitar/Guitar";
import Header from "./components/Header/Header";
import useCart from "./hooks/useCart";

const App = () => {

const {cart, removeFromCart, increaseQuantity, decreaseQuantity, cleanCart, data, cartTotal, isEmpty, addToCart} = useCart();
  
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
        cartTotal={cartTotal}
        isEmpty={isEmpty}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.length ? (
            data.map((d) => (
              <Guitar 
              key={d.id} 
              guitar={d} 
              addToCart={addToCart}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
