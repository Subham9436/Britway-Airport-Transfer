import { Toaster } from "react-hot-toast";
import "./App.css";
import { Land } from "./pages/land";

function App() {
  return (
    <div>
      <Land />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 999999,
        }}
        toastOptions={{
          style: {
            padding: "20px",
            borderRadius: "14px",
            fontSize: "18px",
            fontWeight: 600,
            background: "#fff",
            border: "2px solid #D60000",
            color: "#000",
            textAlign: "center",
          },
        }}
      />
    </div>
  );
}

export default App;
