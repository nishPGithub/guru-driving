import { BrowserRouter} from "react-router-dom";
import "./Styles/index.css";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import AppRoutes from "./Components/Routing/AppRoutes"
import "../src/Styles/style.css";
import Footer from "./Components/Footer/Footer";

function App() {
    const routes = [
        { path: "/", element: <Home /> },
        { path: "/about", element: App },
        { path: "/pricing", element: App },
        { path: "/reviews", element: App },
        { path: "/contact", element: App },
    ];

    return (
        <BrowserRouter basename="/guru-driving">
            <div className="App">
                <Header />
                <AppRoutes routes={routes} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
