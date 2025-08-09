import DynamicCTA from "@/components/DynamicCTA";
import DashboardMainCompo from "@/modules/manage/DashboardMainCompo";

function AccountManage() {
  return (
    <>
      <DynamicCTA
        heading={"Welcome to the dashboard"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* Dashboard Main Components */}
      <DashboardMainCompo />
    </>
  );
}

export default AccountManage;
