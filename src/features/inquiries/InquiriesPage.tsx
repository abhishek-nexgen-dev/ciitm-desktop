import React, { useState, useEffect } from "react";
import {
  MessageSquareText,
  Search,
  Mail,
  Phone,
  Calendar,
  Trash2,
  Reply,
  Send,
  RefreshCw,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import api from "../../Utils/api.utils";
import { BackendContactInquiry } from "../../types/backend.types";

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<BackendContactInquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<BackendContactInquiry | null>(null);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(false);

  const loadInquiries = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/v1/contact/admin/getContact");
      if (res.data?.data && Array.isArray(res.data.data)) {
        setInquiries(res.data.data);
      }
    } catch (err) {
      console.warn("Error fetching inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const filteredInquiries = inquiries.filter((inq) => {
    const text = `${inq.name || ""} ${inq.email || ""} ${inq.subject || ""} ${inq.message || ""}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete inquiry from ${name}?`)) return;
    try {
      await api.delete(`/api/v1/contact/admin/deleteContact/${id}`);
      toast.success("Inquiry removed from database.");
      loadInquiries();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete inquiry.");
    }
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedInquiry) return;
    // Launch mailto for instant email response
    window.location.href = `mailto:${selectedInquiry.email}?subject=${encodeURIComponent(
      `Re: ${selectedInquiry.subject} - CIITM Admissions`,
    )}&body=${encodeURIComponent(replyText)}`;
    toast.success(`Mail composer opened for ${selectedInquiry.email}!`);
    setReplyText("");
    setSelectedInquiry(null);
  };

  return (
    <div className="w-full bg-[#07080C] text-white p-3.5 sm:p-6 lg:p-8">
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300 mb-2">
              <MessageSquareText size={14} /> Help Desk & Inquiries
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Public & Student Inquiries
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Review admission inquiries, scholarship questions, and campus visit requests directly from the database.
            </p>
          </div>

          <button
            onClick={loadInquiries}
            disabled={loading}
            className="self-start sm:self-center p-2 sm:px-3 sm:py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 flex items-center gap-1.5 transition"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-zinc-950/70 p-3 sm:p-4 rounded-2xl border border-zinc-800">
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by candidate name, email, or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Inquiries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {filteredInquiries.map((inq) => (
            <div
              key={inq._id}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-950 p-5 sm:p-6 shadow-xl flex flex-col justify-between hover:border-zinc-700/80 transition"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-sm sm:text-base text-white leading-snug">{inq.subject}</h3>
                  <span className="text-[11px] text-zinc-500 shrink-0 flex items-center gap-1">
                    <Calendar size={12} /> {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : "Recent"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/60 leading-relaxed">
                  "{inq.message}"
                </p>

                <div className="space-y-1 text-xs text-zinc-400 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">Applicant:</span>
                    <span className="text-zinc-200 font-semibold">{inq.name}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <Mail size={13} className="text-zinc-500 shrink-0" />
                    <span className="truncate">{inq.email}</span>
                  </div>
                  {inq.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={13} className="text-zinc-500 shrink-0" />
                      <span>{inq.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-zinc-900 flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedInquiry(inq)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-sm transition"
                >
                  <Reply size={13} /> Respond
                </button>
                <button
                  onClick={() => handleDelete(inq._id, inq.name)}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 hover:bg-rose-950/30 transition"
                  title="Delete Inquiry"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredInquiries.length === 0 && (
          <div className="text-center py-16 text-zinc-500 rounded-2xl border border-zinc-900 bg-zinc-950/40">
            {loading ? "Loading inquiries from backend..." : "No contact inquiries found."}
          </div>
        )}
      </div>

      {/* Reply Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-[#0C0D12] p-5 sm:p-8 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400">
                  Institutional Reply Dispatch
                </span>
                <h2 className="text-base sm:text-lg font-bold text-white mt-1">Reply to {selectedInquiry.name}</h2>
                <p className="text-xs text-zinc-400 truncate">{selectedInquiry.email}</p>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="text-zinc-500 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <div className="text-xs bg-zinc-950 p-3 rounded-xl border border-zinc-800 text-zinc-400">
              <span className="text-zinc-500 font-semibold">Subject:</span> {selectedInquiry.subject}
            </div>

            <form onSubmit={handleSendReply} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-400 font-medium">Official Institutional Response</label>
                <textarea
                  required
                  rows={4}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Dear Candidate, Thank you for reaching out to CIITM..."
                  className="w-full mt-1.5 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setSelectedInquiry(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20"
                >
                  <Send size={13} /> Send Email Response
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
