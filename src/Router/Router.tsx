import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";

// For now, all routes render the same App shell so navigation (bottom/top nav)
// works without crashing. You can later create real pages for each path.
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/menu" element={<App />} />
      <Route path="/about" element={<App />} />
      <Route path="/contact" element={<App />} />
    </>,
  ),
);
