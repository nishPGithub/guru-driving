import { BrowserRouter} from "react-router-dom";
import Header from "./Components/Header";
import "./Styles/index.css";
import AppRoutes from "./Components/AppRoutes";
import Home from "./Pages/Home";

function App() {

    const routes = [
        { path: "/", element: <Home /> },
        { path: "/about", element: App },
        { path: "/pricing", element: App },
        { path: "/reviews", element: App },
        { path: "/contact", element: App },
    ];

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <AppRoutes routes={routes} />
            </div>
        </BrowserRouter>
    );
}

export default App;
