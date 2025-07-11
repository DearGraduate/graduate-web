import { RouterProvider } from "react-router-dom";
import router from "./router/Routes"; // 정확한 경로인지 확인!

function App() {
  return <RouterProvider router={router} />;
}

export default App;
