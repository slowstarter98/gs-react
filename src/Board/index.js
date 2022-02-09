import { Helmet } from "react-helmet";
import "./index.css";

function BoardPage() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
      </Helmet>
      <div id="wrap">
        <section>
          <h1>Board</h1>

          <article id="Writing">
            <h1></h1>
            <hr />
            <h1></h1>
            부적절한 내용, 도배 등 사이트 운영 기준 위반의 경우 동의 없이 삭제될
            수 있습니다.
            <br />
            <br />
          </article>
          <div id="lowContents">
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

            <h3>
              <a className="writing" href="BoardContent.html">
                글 작성하기
              </a>
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
}
export default BoardPage;
