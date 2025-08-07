import DynamicCTA from "@/components/DynamicCTA";
import RegisterFrom from "@/modules/auth/register/RegisterFrom";

function Register() {
  return (
    <>
      <DynamicCTA
        heading={"Registration Form"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* Register From */}
      <RegisterFrom />
    </>
  );
}

export default Register;
