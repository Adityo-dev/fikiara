import SectionRowHeaders from "@/components/sectionHeaders/SectionRowHeaders";

function JoinCommunity() {
  return (
    <section className="relative bg-[#F5F1EA] py-24 overflow-hidden">
      <SectionRowHeaders
        title={"Join Our Learning Community."}
        description={
          "Connect with learners worldwide, exchange ideas, and grow together in a supportive space."
        }
        btn={true}
        buttonText={"Join Community"}
        buttonLink={"/community"}
      />
    </section>
  );
}

export default JoinCommunity;
