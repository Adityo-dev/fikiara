function DashboardStatsCard({ stat }) {
  return (
    <div
      className={`${stat?.bg} p-6 rounded-md shadow-sm flex flex-col items-center`}
    >
      <div className="bg-[#ffffff] rounded-full p-6 mb-4">{stat?.icon}</div>
      <h2 className={`text-4xl font-semibold ${stat?.textColor}`}>
        {stat?.value}
      </h2>
      <p className="uppercase text-sm tracking-wide font-medium text-[#7D7D7D] mt-2">
        {stat?.label}
      </p>
    </div>
  );
}

export default DashboardStatsCard;
