import "./App.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";

import HomeComponent from "./home/index";
import NoticePage from "./notice/index";
import GuidlinePage from "./guidline/index";
import ContactPage from "./contact/index";
import BoardPage from "./Board/index";
import { Helmet } from "react-helmet";
import LoginComponent from "./log-in/index";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      </Helmet>

      <header>
        <div>
          <a href="/" id="logo">
            <h2>Lab402</h2>
          </a>
        </div>
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
            <li>
              <a href="/login">
                <h3 id="log-in">log-in</h3>
              </a>
            </li>
          </ul>
        </nav>
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
        </Switch>
      </div>

      <footer>
        <p>
          <a href="https://ajlab402.blogspot.com" target="blank">
            Developer's Blog
          </a>
        </p>
        <p>Email: ajlab402@gmail.com</p>
      </footer>

      <aside>
        <h1> 사이드 메뉴</h1>
      </aside>
    </div>
  );
}

export default App;
