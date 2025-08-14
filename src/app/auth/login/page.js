import DownloadAppSection from "@/components/DownloadAppSection";
import DynamicCTA from "@/components/DynamicCTA";
import LoginForm from "@/modules/auth/login/LoginFrom";

function Login() {
  return (
    <>
      <DynamicCTA
        heading={"Login Form"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* Login Form And Download App Section */}
      <LoginForm />
      <DownloadAppSection />
    </>
  );
}

export default Login;
