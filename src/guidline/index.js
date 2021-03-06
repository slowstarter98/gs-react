import { Helmet } from "react-helmet";
import "./guidline.css";

function GuidlinePage() {
  return (
    <div id="wrap">
      <section>
        <title_>
          <h1>REST API 이용 가이드라인</h1>
        </title_>

        <article id="REST_API_Explanation">
          <h1>기본 정보</h1>
          <hr />
          <p>2012년 이후 상장기업의 재무제표를 제공합니다.</p>
          <p>
            재무제표는 기업별로 제공되며, 재무상태표/손익계산서/현금흐름표를
            확인할 수 있습니다.
          </p>
          <p>금융감독원에서 제공하는 DART의 데이터를 기반으로 하고 있습니다.</p>
          <p>
            XBRL파일을 기반으로 하고 있어, 소규모 기업 등의 경우 데이터가 누락된
            경우가 존재합니다.
          </p>
          <p>
            추후 업데이트 될 예정이며, 데이터 구성 방식 및 주의사항은 아래 pdf를
            참조해주시기 바랍니다.
          </p>
          <br />
          <a
            href="http://testlab402.com/static/Moggle_API_Guideline.pdf"
            target="blank"
          >
            Moggle_API_Guideline.pdf
          </a>
        </article>

        <article id="REST_API_Usage">
          <h1>이용 안내</h1>
          <hr />
          <br />
          <h1>REST API 구성</h1>
          <table>
            <tr>
              <th>Method</th>
              <th>URL</th>
              <th>Encoding</th>
            </tr>
            <tr>
              <th>GET</th>
              <th>https://testlab402.com/api</th>
              <th>UTF-8</th>
            </tr>
          </table>
          <br />
          <br />
          <br />
          <h1>요청 인자</h1>
          <table>
            <tr>
              <th>Key</th>
              <th>요청 정보</th>
              <th>변수 타입</th>
              <th>설명</th>
            </tr>
            <tr>
              <th>corp_code</th>
              <th>종목코드</th>
              <th>STRING(6)</th>
              <th>
                원하는 상장기업의 종목코드(6자리)
                <br />
                ex) 삼성전자: 005930
              </th>
            </tr>
            <tr>
              <th>fs_type</th>
              <th>재무제표타입</th>
              <th>STRING(2)</th>
              <th>
                원하는 재무제표의 타입(2자리)
                <br />
                재무상태표: FS / 손익계산서 : BS / 현금흐름표 : CF
              </th>
            </tr>
          </table>
          <p>
            예시 url:{" "}
            <a
              href="https://testlab402.com/api?corp_code=005930&fs_type=FS"
              target="blank"
            >
              {" "}
              https://testlab402.com/api?corp_code=005930&fs_type=FS
            </a>
          </p>
          <p>(삼성전자의 2012년 이후 분기별 재무상태표)</p>
          <br />
          <hr />
          <p>
            위의 링크는 json 형태로 제공된 것이므로, 입맛에 맞게 정제하셔서
            사용하시면 됩니다.
          </p>
          <p>
            위를 활용하여 정제할 수 있도록 마련된 Python 예제코드를 아래
            Github에서 확인하실 수 있습니다.
          </p>
          <a
            href="https://github.com/AJLab402/REST_API_Guideline"
            target="blank"
          >
            @Github
          </a>
        </article>
      </section>
    </div>
  );
}

export default GuidlinePage;
