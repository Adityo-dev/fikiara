function SectionRowHeaders({
  title,
  description,
  btn = false,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Title */}
        <h2 className="max-w-xl text-[48px] font-bold text-[#101B24] leading-tight">
          {title}
        </h2>

        {/* Description & Button */}
        <div className="max-w-md flex flex-col items-start space-y-5">
          <p className="text-[#7D7D7D] text-lg leading-relaxed">
            {description}
          </p>

          {/* Action Button  */}
          {btn && (
            <a
              href={buttonLink}
              className="inline-block bg-[#FFA41F] text-[#101B24] text-lg font-medium px-6 py-2 rounded-md border border-[#FFA41F] hover:bg-[#ffb133] transition"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionRowHeaders;
