import './App.css';
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import ProductListPage from "./pages/ProductList";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import SuccessPage from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/products/:category">
                <ProductListPage />
            </Route>
            <Route path="/product/:id">
                <ProductPage />
            </Route>
            <Route path="/cart">
                <CartPage />
            </Route>
            <Route path="/success">
                <SuccessPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
        </Switch>
        { !user ? <div>anonimus</div> : <div>user</div> }
    </div>
  );
}

export default App;
