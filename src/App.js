import './App.css';

function App() {
  const CLIENT_ID = "2d8016749bbd32ae6daa139bdd487420";
  const REDIRECT_URI = "https://ticket-interview.com/kakao/login";
  const RESPONSE_TYPE = 'code';
  // kakao에서 제공하는 주소 => 인가코드를 받아오는 주소
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`

  /** 로그인 */
  const login = () => {
    window.open(KAKAO_AUTH_URL, "_blank", "width=400, height=500, left=500, top=400");
  }

  return (
    <div className="App">
      <button onClick={() => login()}>login</button>
    </div>
  );
}

export default App;
