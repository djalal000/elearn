
import React from "react";
import Navbar from "./componets/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Moduledit from "./pages/Modules";
import Eval from "./pages/evaluation";
import Chat from "./pages/chats";
import Notif from "./pages/notification";
import StudentProfilePage from "./pages/profile"


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Moduledit" element={<Moduledit />} />
                <Route
                    path="/Eval"
                    element={<Eval />}
                />
                <Route
                    path="/chat"
                    element={<Chat/>}
                />

                <Route path="/Notif" element={<Notif />} />
                <Route path="/profile" element={<StudentProfilePage />} />

            </Routes>
        </Router>
    );
}

export default App;
