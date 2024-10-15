const App = () => {
  return (
    <div>
      <h1>Welcome to the T-Shirt Store</h1>
      <TShirtList />
    </div>
  );
};

// Render the App component to the DOM
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
