import "./App.css";
import Contact from "./features/contact/Contact";
import Todo from "./features/todo/Todo";
import Header from "./shared/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
