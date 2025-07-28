function SectionColumnsHeaders({ title, description }) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-semibold leading-16 text-[#101B24]">
        {title}
      </h2>
      <p className="text-lg text-[#7D7D7D] leading-8 mt-4">{description}</p>
    </div>
  );
}

export default SectionColumnsHeaders;
