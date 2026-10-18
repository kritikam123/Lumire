import { Toaster } from "sonner";

import Router from "./router/Router";
import AuthProvider from "./context/AuthProvider";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router />

        <Toaster position="top-right" richColors />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
