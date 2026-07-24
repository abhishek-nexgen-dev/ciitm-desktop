import { X, Mail, Send } from "lucide-react";
import { useState } from "react";

interface SendNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onSend: (data: { title: string; message: string; email: string }) => void;
}

export default function SendNotificationModal({
  isOpen,
  onClose,
  email,
  onSend,
}: SendNotificationModalProps) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim() || !message.trim()) {
      alert("Please fill all fields.");
      return;
    }

    onSend({
      title,
      message,
      email,
    });

    setTitle("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-white">Send Notification</h2>
            <p className="mt-1 text-sm text-zinc-400">Send an email notification to the student.</p>
          </div>

          <button onClick={onClose} className="rounded-lg p-2 hover:bg-zinc-800">
            <X size={20} className="text-zinc-400" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-5 p-6">
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">Email</label>

            <div className="flex items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3">
              <Mail size={18} className="text-zinc-400" />

              <input
                value={email}
                readOnly
                className="w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">Title</label>

            <input
              type="text"
              placeholder="Enter notification title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">Message</label>

            <textarea
              rows={6}
              placeholder="Write your notification..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-zinc-800 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-zinc-700 px-5 py-2 text-zinc-300 hover:bg-zinc-800"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            <Send size={18} />
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
}
