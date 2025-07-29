function SectionColumnsHeaders({ title, description }) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-semibold leading-tight text-[#101B24]">
        {title}
      </h2>
      <p className="text-lg text-[#7D7D7D] leading-relaxed mt-4">
        {description}
      </p>
    </div>
  );
}

export default SectionColumnsHeaders;
