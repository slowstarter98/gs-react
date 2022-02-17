import "./App.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";

import HomeComponent from "./home/index";
import NoticePage from "./notice/index";
import GuidlinePage from "./guidline/index";
import ContactPage from "./contact/index";
import BoardPage from "./Board/index";
import { Helmet } from "react-helmet";
import LoginComponent from "./log-in/index";
import Mypage from "./myPage";

function App() {
  return (
    <div>
      {/* 사이드바 css 링크 */}
      <link
        href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      </Helmet>

      <header>
        <div id="second-floor">
          <a href="/" id="logo">
            <h2>Lab402</h2>
          </a>
          <div id="userPage">
            <a href="/login">
              <h3 id="log-in">log-in</h3>
            </a>

            <a href="/my-page">
              <h3 id="my-page">my page</h3>
            </a>
          </div>
        </div>

        <div id="first-floor">
          <nav>
            <ul className="nav-items">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/notice">Notice</a>
              </li>
              <li>
                <a href="/board">Board</a>
              </li>
              <li>
                <a href="/guidline">Guideline</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div id="body">
        <Switch>
          {/* Home 화면 */}
          <Route exact={true} path={"/"}>
            <HomeComponent />
          </Route>

          {/* Notice 화면 */}
          <Route exact={true} path={"/notice"}>
            <NoticePage />
          </Route>

          {/* Board 화면 */}
          <Route exact={true} path={"/board"}>
            <BoardPage />
          </Route>

          {/* Guidline 화면 */}
          <Route exact={true} path={"/guidline"}>
            <GuidlinePage />
          </Route>

          {/* Contact 화면 */}
          <Route exact={true} path={"/contact"}>
            <ContactPage />
          </Route>

          {/* log-in 화면 */}
          <Route exact={true} path={"/login"}>
            <LoginComponent />
          </Route>
          {/* My-page 화면 */}
          <Route exact={true} path={"/my-page"}>
            <Mypage />
          </Route>
        </Switch>
      </div>

      {/* 사이드 바 작업------------------------------------------------------ */}
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src="favicon.ico" alt="logo"></img>
            </span>
            <div className="text header-text">
              <span className="name">402Lab</span>
              <span className="profession">side-menu</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle"></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-home-alt"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ------------------------------------------------------ */}
      <footer>
        <p>
          <a href="https://ajlab402.blogspot.com" target="blank">
            Developer's Blog
          </a>
        </p>
        <p>Email: ajlab402@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
