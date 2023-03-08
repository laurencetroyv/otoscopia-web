import logo from "./logo.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App-header min-h-screen flex flex-col items-center justify-center space-y-4">
      <img src={logo} alt="hello" width={"25%"} />
      <p className="text-white text-center text-base w-1/2">
        <i>
          Otoscopia is a cross-platform app designed for school nurses with a
          smartphone-enabled-otoscope and electronic-medical-record features,
          providing easy and accurate ear exams and medical history tracking for
          students.
        </i>
      </p>
      <div className="animate-pulse">
        <h1 className="text-white text-3xl animate-bounce rosarvio mt-4">
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

export default App;
