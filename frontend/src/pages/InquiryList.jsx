import axios from "axios";
import { useState } from "react";

export default function InquiryList({ inquiries, refresh }) {
  const [sourceFilter, setSourceFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/inquiries/${id}`,
        { status }
      );
      refresh();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const statusStyles = {
    New: "bg-blue-100 text-blue-700",
    Contacted: "bg-yellow-100 text-yellow-700",
    Closed: "bg-green-100 text-green-700",
  };

  
  const filteredInquiries = inquiries.filter((inq) => {
    const sourceMatch =
      sourceFilter === "All" || inq.source === sourceFilter;
    const statusMatch =
      statusFilter === "All" || inq.status === statusFilter;

    return sourceMatch && statusMatch;
  });

  return (
    <div>
        
      <div className="bg-white border border-gray-100 rounded-xl p-4 mb-5 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
            
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Filter by Source
            </label>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option>All</option>
              <option>Website</option>
              <option>WhatsApp</option>
              <option>Email</option>
              <option>Referral</option>
            </select>
          </div>


          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Filter by Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option>All</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Closed</option>
            </select>
          </div>
        </div>
      </div>


      {!filteredInquiries.length ? (
        <div className="text-center text-gray-500 py-6">
          No inquiries match the selected filters
        </div>
      ) : (
        <div className="space-y-4">
          {filteredInquiries.map((inq) => (
            <div
              key={inq._id}
              className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm
                         flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
                
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-800">
                  {inq.name}
                </p>
                <p className="text-sm text-gray-500">
                  {inq.contact}
                </p>
                <p className="text-xs text-gray-400">
                  Source: {inq.source}
                </p>
              </div>


              <div className="flex items-center gap-3">
                
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[inq.status]}`}
                >
                  {inq.status}
                </span>


                <select
                  value={inq.status}
                  onChange={(e) =>
                    updateStatus(inq._id, e.target.value)
                  }
                  className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm
                             focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
