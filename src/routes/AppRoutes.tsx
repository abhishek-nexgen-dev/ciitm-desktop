import { Navigate, Route, Routes } from "react-router-dom";
import Template from "../features/template/v1/SideBar/Template";
import { HomePage } from "../features/home";

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
      <Route element={<Template />}>
        <Route index element={<HomePage />} />
        <Route
          path="dashboard"
          element={
            <SimplePage
              title="Dashboard"
              description="Dashboard shell is ready for feature-level composition."
            />
          }
        />
        <Route
          path="login"
          element={<SimplePage title="Login" description="Login screen placeholder for v1." />}
        />
        <Route
          path="student"
          element={<SimplePage title="Student" description="Student area placeholder for v1." />}
        />
        <Route
          path="teacher"
          element={<SimplePage title="Teacher" description="Teacher area placeholder for v1." />}
        />
        <Route
          path="payment"
          element={<SimplePage title="Payment" description="Payment flow placeholder for v1." />}
        />
        <Route
          path="status"
          element={<SimplePage title="Status" description="Status view placeholder for v1." />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
