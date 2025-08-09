import { useState } from "react";

function Password() {
  const [formData, setFormData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.new !== formData.confirm) {
      setError("New passwords do not match.");
      return;
    }

    // Handle password change logic here (e.g., API call)

    // Reset form
    setFormData({ current: "", new: "", confirm: "" });
    setError("");
    // Optionally show success toast/message
  };

  const isDisabled = !formData.current || !formData.new || !formData.confirm;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <p className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-md">
          {error}
        </p>
      )}
      <div>
        <label className="block text-[#000] mb-1">Current Password</label>
        <input
          name="current"
          type="password"
          className="w-full p-3 bg-[#EBEBEB] border border-[#FFA41F66] rounded-md outline-none focus:border-[#FFA41F] transition-colors"
          placeholder="Enter current password"
          value={formData.current}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-[#000] mb-1">New Password</label>
        <input
          name="new"
          type="password"
          className="w-full p-3 bg-[#EBEBEB] border border-[#FFA41F66] rounded-md outline-none focus:border-[#FFA41F] transition-colors"
          placeholder="Enter new password"
          value={formData.new}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-[#000] mb-1">Confirm New Password</label>
        <input
          name="confirm"
          type="password"
          className="w-full p-3 bg-[#EBEBEB] border border-[#FFA41F66] rounded-md outline-none focus:border-[#FFA41F] transition-colors"
          placeholder="Confirm new password"
          value={formData.confirm}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isDisabled}
        className={`px-6 py-3 rounded-lg text-[#FFFFFF] ${
          isDisabled
            ? "bg-[#FFA41F66] px-6 py-2.5 rounded-md cursor-not-allowed"
            : "bg-[#FFA41F] cursor-pointer"
        }`}
      >
        Change Password
      </button>
    </form>
  );
}

export default Password;
