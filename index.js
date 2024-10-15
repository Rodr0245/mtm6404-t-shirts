const App = () => {
  return (
    <div>
      <TShirtList />
    </div>
  );
};

// Render the App component to the DOM
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);
