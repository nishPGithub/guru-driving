import { BrowserRouter} from "react-router-dom";
import "./Styles/index.css";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import AppRoutes from "./Components/Routing/AppRoutes"
import "../src/Styles/style.css"

function App() {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    console.log(viewportHeight);
    console.log(viewportWidth);

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
            </div>
        </BrowserRouter>
    );
}

export default App;
