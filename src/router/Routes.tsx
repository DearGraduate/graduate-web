import { createBrowserRouter } from "react-router-dom";
import GraduationMessageForm from "../components/GraduationMessageForm";

const router = createBrowserRouter([
  {
    path: "/graduation-message",
    element: <GraduationMessageForm />,
  },
  {
    path: "/",
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <a
          href="/graduation-message"
          className="text-blue-600 underline text-lg"
        >
          졸업 축하 페이지로 이동
        </a>
      </div>
    ),
  },
]);

export default router;
