import "@fortawesome/fontawesome-free/css/all.min.css";
import { createRoot } from "react-dom/client";

import App from "./App";
import { checkForRedirect } from "./rerouting";

const redirecting = checkForRedirect();

if (!redirecting) {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(<App />);
}
