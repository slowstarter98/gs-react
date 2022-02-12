import "./notice.css";
import { Helmet } from "react-helmet";

function NoticePage() {
  return (
    <div id="wrap">
      <section>
        <h1>Notice</h1>
        <article id="first_note">
          <h1>
            <a href="Notice_content.html">REST API 기반 재무 데이터 제공</a>
          </h1>
        </article>

        <article id="second_note">
          <h1>
            <a href="Notice_content.html">Moggle Project</a>
          </h1>
        </article>
        <nav>
          <ul class="page_nums">
            <li>
              <a href="#1">1</a>
            </li>
            <li>
              <a href="#2">2</a>
            </li>
            <li>
              <a href="#3">3</a>
            </li>
            <li>
              <a href="#4">4</a>
            </li>
            <li>
              <a href="#5">5</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default NoticePage;
