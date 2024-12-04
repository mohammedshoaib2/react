import Login from "../components/Login";
import Profile from "../components/Profile";
import UserContextProvider from "../context/UserContextProvider";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>REACT CONTEXT API</p>

      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
