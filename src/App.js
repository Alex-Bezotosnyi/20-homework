import "./style/style.css"
import Navbar from "./pages/navbar/navbar";
import Home from "./pages/home/home";
import AppPosts from "./pages/posts/main-posts";
import Gallery from "./pages/gallery/gallery";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./pages/contacts/contactpage";
import contacts from "./pages/contacts/data";
import SearchFilter from "./pages/contacts/contacts";

function App() {
    return (
        <>
            <Navbar/>
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/src/pages/posts/main-posts" element={<AppPosts/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/src/pages/contacts/" element={<SearchFilter/>}/>
                    <Route path="/src/pages/contacts/:firstName" element={<ContactPage contacts={contacts}/>}/>
                    <Route path="*" element={<Home />}/>
                </Routes>
            </div>
        < />
    );
}

export default App;
