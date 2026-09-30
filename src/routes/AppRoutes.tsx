import { Navigate, Route, Routes } from "react-router-dom";
import Template from "../features/template/v1/SideBar/Template";
import DashboardPage from "../features/dashboard/v1/DashboardPage";
import PaymentPage from "../features/payment/v1/PaymentPage";
import LoginPage from "../features/login/LoginPage";
import ForgotPasswordPage from "../features/login/ForgotPasswordPage";
import StudentPage from "../features/Student/StudentPage";
import StudentProfilePage from "../features/Student/StudentProfilePage";
import CreateCoursePage from "../features/Course/v1/Page/CreateCoursePage";
import ManageCoursePage from "../features/Course/v1/Page/ManageCoursePage";
import CourseDetailsPage from "../features/CourseDetails/CourseDetailPage";
import AdmissionsPage from "../features/admissions/AdmissionsPage";
import TeacherPage from "../features/teacher/TeacherPage";
import NoticesPage from "../features/notices/NoticesPage";
import InquiriesPage from "../features/inquiries/InquiriesPage";
import MediaPage from "../features/media/MediaPage";
import SystemPage from "../features/system/SystemPage";
import SettingsPage from "../features/settings/SettingsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route element={<Template />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="status" element={<AdmissionsPage />} />
        <Route path="student" element={<StudentPage />} />
        <Route path="student/:studentId" element={<StudentProfilePage />} />
        <Route path="course-management" element={<ManageCoursePage />} />
        <Route path="create-course" element={<CreateCoursePage />} />
        <Route path="course-view" element={<CourseDetailsPage />} />
        <Route path="teacher" element={<TeacherPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="inquiries" element={<InquiriesPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="system" element={<SystemPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
