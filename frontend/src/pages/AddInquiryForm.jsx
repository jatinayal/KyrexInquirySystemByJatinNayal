import axios from "axios";
import { useState } from "react";

export default function AddInquiryForm({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    source: "Website",
  });

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!form.name || !form.contact) {
      alert("Name and contact are required");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/inquiries", form);
      setForm({ name: "", contact: "", source: "Website" });
      refresh();
    } catch (err) {
      alert("Failed to add inquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-5 sm:p-6 rounded-xl border border-blue-100 shadow-sm mb-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Add New Inquiry
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Contact
          </label>
          <input
            type="text"
            placeholder="Email or phone number"
            value={form.contact}
            onChange={(e) =>
              setForm({ ...form, contact: e.target.value })
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Source
          </label>
          <select
            value={form.source}
            onChange={(e) =>
              setForm({ ...form, source: e.target.value })
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white
              focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
          >
            <option>Website</option>
            <option>WhatsApp</option>
            <option>Email</option>
            <option>Referral</option>
          </select>
        </div>
      </div>


      <div className="mt-5 flex justify-end">
        <button
          onClick={submit}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-lg
            bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white
            hover:bg-indigo-700 transition
            disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Adding..." : "Add Inquiry"}
        </button>
      </div>
    </div>
  );
}
