import { useState } from "react";

const defaultProfile = {
  name: "Aditto Dev Barmon Koushik",
  email: "adittodev01770@gmail.com",
  phone: "+8801770365981",
};

const inputFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone", name: "phone", type: "tel" },
];

function Profile() {
  const [profile, setProfile] = useState(defaultProfile);
  const [backupProfile, setBackupProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setBackupProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setProfile(backupProfile);
    setIsEditing(false);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const isChanged = JSON.stringify(profile) !== JSON.stringify(backupProfile);

  return (
    <form className="space-y-4" onSubmit={handleUpdateProfile}>
      {inputFields.map(({ label, name, type }) => (
        <div key={name}>
          <label htmlFor={name} className="block text-[#000] mb-1">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={profile[name]}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full p-3 bg-[#EBEBEB] border border-[#FFA41F66] rounded-md outline-none focus:border-[#FFA41F] transition-colors"
          />
        </div>
      ))}

      {isEditing ? (
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={!isChanged}
            className={`px-6 py-2.5 rounded-lg text-[#ffffff] ${
              isChanged
                ? "bg-[#FFA41F] cursor-pointer"
                : "bg-[#FFA41F66] cursor-not-allowed"
            }`}
          >
            Update Profile
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="border border-[#FFA41F] text-gray-700 px-6 py-2.5 rounded-lg  cursor-pointer"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleEdit}
          className="bg-[#FFA41F] text-[#FFFFFF] px-6 py-2.5 rounded-md cursor-pointer"
        >
          Edit Profile
        </button>
      )}
    </form>
  );
}

export default Profile;
