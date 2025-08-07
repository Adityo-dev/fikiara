import DynamicCTA from "@/components/DynamicCTA";
import MyCart from "@/modules/myCart/MyCart";

function page() {
  return (
    <>
      <DynamicCTA
        heading={"My Cart"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* My Cart */}
      <MyCart />
    </>
  );
}

export default page;
