const tags = [
  { id: 1, name: "New course" },
  { id: 2, name: "Graphics design" },
  { id: 3, name: "Programming" },
  { id: 4, name: "Project Management" },
  { id: 5, name: "Cybersecurity" },
  { id: 6, name: "Up coming" },
  { id: 7, name: "Course video" },
];

function CourseTag() {
  return (
    <div className="bg-white rounded-xl shadow-sm w-full p-6">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="px-4 py-2 text-[14px] text-[#101B24] bg-[#FFC9B51A] rounded-lg border border-[#1212121A] cursor-pointer"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CourseTag;
