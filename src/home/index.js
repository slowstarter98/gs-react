import "./home.css";
import { Helmet } from "react-helmet";
function HomeComponent() {
  return (
    <div id="wrap">
      <section>
        <h1>
          <a className="sectionTitle" href="Contact.html">
            About
          </a>
        </h1>

        <article id="first_intro">
          <h1>
            <a>Lab402</a>
          </h1>
          <hr />
          <p>금융 시장의 진입장벽을 낮추는 데 일조하고자 하는 실험실입니다.</p>
          <p>설명 가능한 Data driven investment를 지향합니다.</p>
        </article>
        <article id="second_intro">
          <h1>
            <a>Moggle</a>
          </h1>
          <hr />
          <p>
            '모두를 위한 그래디언트'를 상징하는 프로젝트로, 현재 베타 서비스
            운영 단계입니다.
          </p>
          <p>저희와 함께하고 싶으신 분들을 언제나 환영합니다!</p>
          <p>Contact를 확인해 주세요.</p>
        </article>
      </section>

      <section>
        <h1>
          <a className="sectionTitle" href="/notice">
            Notice
          </a>
        </h1>

        <article id="first_note">
          <h1>
            <a href="Notice_content.html">REST API 기반 재무 데이터 제공</a>
          </h1>
          <hr />
          <p>DART에서 제공되는 재무제표를 편리하게 받아보실 수 있습니다.</p>
          <p>
            REST API 기반으로 서비스하며, 자세한 내용은 가이드라인을
            참고해주세요.
          </p>
          <p>
            베타 서비스이며, 주의사항이 안내되어 있으니 확인해주시기 바랍니다.
          </p>
          <p>앞으로 꾸준히 업데이트 될 예정입니다!</p>
        </article>
        <article id="second_note">
          <h1>
            <a href="Notice_content.html">Moggle Project</a>
          </h1>
          <hr />
          <p>'모두를 위한 그래디언트'</p>
          <p>모글 프로젝트를 준비 중에 있습니다.</p>
          <p>많은 관심 부탁드립니다!</p>
        </article>
      </section>
    </div>
  );
}

export default HomeComponent;
