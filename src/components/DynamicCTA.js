function DynamicCTA({ heading, description }) {
  return (
    <section className="relative overflow-hidden bg-[#114C5F] px-4 py-20">
      <div className="relative container sm:max-w-[60%] mx-auto text-center space-y-2 sm:space-y-4 z-30">
        <h3 className="text-[#FFF] text-[48px] font-semibold leading-[62px] capitalize">
          {heading}
        </h3>
        <p className="sm:w-[60%] mx-auto text-lg text-[#D4D4D4] sm:leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

export default DynamicCTA;
