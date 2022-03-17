import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Mail from "./main/body/mail/Mail";
import Header from "./main/header/Header";
import Sidebar from "./main/sidebar/Sidebar";
import SendMail from "./main/body/sendMail/SendMail";
import EmailList from "./main/body/emailList/EmailList";

const Dashboard = () => {
  return <div>hello</div>;
};
// const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
// const Videos = () => <h1>Content/Videos</h1>;
// const Design = () => <h1>Design</h1>;
// const Content2 = () => <h1>Content2</h1>;
// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;
// const Design2 = () => <h1>Design 2</h1>;

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <Router>
      <div className="App">
        <div >
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        </div>
        <div style={{flex: 1}}>
          <Header />
          <div className="app__body">
            <Sidebar />
             <div className="app__mail_container">
            <Routes>
              {/* <Route path="/" element={} /> */}
              <Route exact  path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
