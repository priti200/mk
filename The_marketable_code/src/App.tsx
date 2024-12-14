import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header/header";
import { ThemeProvider } from "./hooks/use-theme";
import { ContactPage } from "./pages/contact";
import { CourseDetailsPage } from "./pages/course-details";
import { CoursesPage } from "./pages/courses";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { SignupPage } from "./pages/signup";

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetailsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}
