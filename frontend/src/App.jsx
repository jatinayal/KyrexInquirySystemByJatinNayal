import { useEffect, useState } from "react";
import axios from "axios";
import AddInquiryForm from "./pages/AddInquiryForm";
import InquiryList from "./pages/InquiryList";

function App() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/inquiries");
      setInquiries(res.data);
    } catch (err) {
      alert("Failed to fetch inquiries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            📩 Kyrex Inquiry Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track and manage inquiries from multiple sources
          </p>
        </div>


        <AddInquiryForm refresh={fetchInquiries} />


        <div className="my-6 border-t border-gray-200" />


        {loading ? (
          <div className="text-center text-gray-500 py-8">
            Loading inquiries...
          </div>
        ) : (
          <InquiryList inquiries={inquiries} refresh={fetchInquiries} />
        )}
      </div>
    </div>
  );
}

export default App;
