import { Navigate, Route, Routes } from "react-router-dom";
import Template from "../features/template/v1/SideBar/Template";
import { HomePage } from "../features/home";
import DashboardPage from "../features/dashboard/v1/DashboardPage";
import PaymentPage from "../features/payment/v1/PaymentPage";
import LoginPage from "../features/login/LoginPage";
import StudentPage from "../features/Student/StudentPage";
import StudentProfilePage from "../features/Student/StudentProfilePage";
import CreateCoursePage from "../features/Course/v1/Page/CreateCoursePage";
import ManageCoursePage from "../features/Course/v1/Page/ManageCoursePage";

function SimplePage({ title, description }: { title: string; description: string }) {
  return (
    <main className="page-shell">
      <section className="content-card">
        <p className="panel-label">Route</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
    </main>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<Template />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route
          path="login"
          element={<SimplePage title="Login" description="Login screen placeholder for v1." />}
        />
        <Route path="student" element={<StudentPage />} />
        <Route path="student/:studentId" element={<StudentProfilePage />} />
        <Route
          path="teacher"
          element={<SimplePage title="Teacher" description="Teacher area placeholder for v1." />}
        />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="create-course" element={<CreateCoursePage />} />
        <Route path="course-management" element={<ManageCoursePage />} />
        <Route
          path="status"
          element={<SimplePage title="Status" description="Status view placeholder for v1." />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
