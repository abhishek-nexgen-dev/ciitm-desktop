import React, { useState, useEffect } from "react";
import {
  Megaphone,
  Plus,
  Search,
  Bell,
  Calendar,
  Download,
  RefreshCw,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import api from "../../Utils/api.utils";
import { BackendNotice } from "../../types/backend.types";

export default function NoticesPage() {
  const [notices, setNotices] = useState<BackendNotice[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    noticeContent: "",
    type: "Announcement",
    target: "all-students",
    priority: "normal",
    doc_link: "",
  });

  const loadNotices = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/v1/notice/find");
      if (res.data?.data && Array.isArray(res.data.data)) {
        setNotices(res.data.data);
      }
    } catch (err) {
      console.warn("Error fetching notices:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotices();
  }, []);

  const filteredNotices = notices.filter((n) => {
    const text = `${n.title || ""} ${n.content || ""} ${n.noticeContent || ""}`.toLowerCase();
    const matchSearch = text.includes(searchTerm.toLowerCase());
    const matchType = typeFilter === "all" || (n.type || "").toLowerCase() === typeFilter.toLowerCase();
    return matchSearch && matchType;
  });

  const handleCreateNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      toast.error("Notice title is required.");
      return;
    }

    try {
      await api.post("/api/v1/notice/create", {
        title: formData.title,
        noticeContent: formData.noticeContent,
        content: formData.noticeContent,
        type: formData.type,
        target: formData.target,
        priority: formData.priority,
        doc_link: formData.doc_link,
      });

      toast.success(`Circular "${formData.title}" published successfully!`);
      setIsCreateModalOpen(false);
      setFormData({
        title: "",
        noticeContent: "",
        type: "Announcement",
        target: "all-students",
        priority: "normal",
        doc_link: "",
      });
      loadNotices();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to broadcast notice.");
    }
  };

  return (
    <div className="w-full bg-[#07080C] text-white p-3.5 sm:p-6 lg:p-8">
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300 mb-2">
              <Megaphone size={14} /> Campus Circulars & Alerts
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Institutional Notices & Broadcasts
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Issue examination timetables, holiday declarations, and emergency alerts from the backend.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={loadNotices}
              disabled={loading}
              className="p-2 sm:px-3 sm:py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 flex items-center gap-1.5 transition"
              title="Refresh"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition active:scale-[0.98]"
            >
              <Plus size={16} /> Broadcast Circular
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 bg-zinc-950/70 p-3 sm:p-4 rounded-2xl border border-zinc-800">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search circulars, examination orders, holidays..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0">
            {[
              { id: "all", label: "All Types" },
              { id: "Announcement", label: "Announcements" },
              { id: "Holiday", label: "Holidays" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTypeFilter(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                  typeFilter === t.id
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notice List */}
        <div className="space-y-3.5 sm:space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice._id}
              className={`rounded-2xl border p-4 sm:p-6 transition shadow-md bg-zinc-950/90 ${
                notice.priority === "urgent" || notice.type === "Holiday"
                  ? "border-rose-500/30 bg-rose-950/10"
                  : "border-zinc-800/80 hover:border-zinc-700"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {notice.type && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        <Bell size={11} /> {notice.type}
                      </span>
                    )}

                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Calendar size={13} /> {notice.dateIssued ? new Date(notice.dateIssued).toLocaleDateString() : notice.date ? new Date(notice.date).toLocaleDateString() : "Recent"}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{notice.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
                    {notice.content || notice.noticeContent || "No description provided."}
                  </p>
                </div>

                {(notice.doc_link || notice.fileUrl) && (
                  <a
                    href={notice.doc_link || notice.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-indigo-400 hover:text-indigo-300 hover:bg-zinc-800 transition"
                  >
                    <Download size={14} /> View Document
                  </a>
                )}
              </div>
            </div>
          ))}

          {filteredNotices.length === 0 && (
            <div className="text-center py-16 text-zinc-500 rounded-2xl border border-zinc-900 bg-zinc-950/40">
              {loading ? "Loading circulars from backend..." : "No campus circulars found."}
            </div>
          )}
        </div>
      </div>

      {/* Broadcast Circular Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-[#0C0D12] p-5 sm:p-8 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400">
                  Campus Broadcast Engine
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white mt-1">Issue Official Circular</h2>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-zinc-500 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateNotice} className="space-y-3.5">
              <div>
                <label className="text-xs text-zinc-400">Circular Headline / Subject *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Schedule for Mid-Term Practical Evaluations"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-zinc-400">Notice Category</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Announcement">Announcement</option>
                    <option value="Holiday">Holiday</option>
                    <option value="Exam">Examination</option>
                    <option value="Event">Campus Event</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-zinc-400">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-zinc-400">Circular Body & Instructions *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Enter official instructions, venue details, submission deadlines..."
                  value={formData.noticeContent}
                  onChange={(e) => setFormData({ ...formData, noticeContent: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400">Attachment Document URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={formData.doc_link}
                  onChange={(e) => setFormData({ ...formData, doc_link: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20"
                >
                  Dispatch Circular
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
