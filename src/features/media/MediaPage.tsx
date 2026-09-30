import React, { useState, useEffect } from "react";
import {
  Images,
  Trash2,
  UploadCloud,
  FolderPlus,
  Eye,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import api from "../../Utils/api.utils";
import { BackendAlbum, BackendImage } from "../../types/backend.types";

export default function MediaPage() {
  const [albums, setAlbums] = useState<BackendAlbum[]>([]);
  const [images, setImages] = useState<BackendImage[]>([]);
  const [activeTab, setActiveTab] = useState<"albums" | "images">("albums");
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Modals
  const [isAlbumModalOpen, setIsAlbumModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Forms
  const [albumForm, setAlbumForm] = useState({
    albumName: "",
    description: "",
    coverImage: "",
  });

  const [imageForm, setImageForm] = useState({
    title: "",
    albumName: "",
    imageUrl: "",
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const [albRes, imgRes] = await Promise.allSettled([
        api.get("/api/v1/user/get/album"),
        api.get("/api/v1/user/get/All/Image"),
      ]);

      if (albRes.status === "fulfilled" && albRes.value.data?.data) {
        setAlbums(albRes.value.data.data);
      }
      if (imgRes.status === "fulfilled" && imgRes.value.data?.data) {
        setImages(imgRes.value.data.data);
      }
    } catch (err) {
      console.warn("Error fetching media:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreateAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!albumForm.albumName) {
      toast.error("Album name is required.");
      return;
    }
    try {
      await api.post("/api/v1/admin/create/album", {
        albumName: albumForm.albumName,
        aName: albumForm.albumName,
        description: albumForm.description,
        aDescription: albumForm.description,
        coverImage: albumForm.coverImage,
        aImage_url: albumForm.coverImage,
      });
      toast.success(`Album "${albumForm.albumName}" created!`);
      setIsAlbumModalOpen(false);
      setAlbumForm({ albumName: "", description: "", coverImage: "" });
      loadData();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to create album.");
    }
  };

  const handleUploadImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageForm.title || !imageForm.albumName) {
      toast.error("Please provide title and target album.");
      return;
    }
    try {
      await api.post("/api/v1/admin/create/image", {
        title: imageForm.title,
        Album_Name: imageForm.albumName,
        albumName: imageForm.albumName,
        imageUrl: imageForm.imageUrl,
        image_url: imageForm.imageUrl,
      });
      toast.success(`Image "${imageForm.title}" uploaded!`);
      setIsImageModalOpen(false);
      setImageForm({ title: "", albumName: "", imageUrl: "" });
      loadData();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to upload image.");
    }
  };

  const handleDeleteAlbum = async (id: string, name: string) => {
    if (!confirm(`Delete album "${name}" and all its photos?`)) return;
    try {
      await api.delete(`/api/v1/admin/delete/album/${id}`);
      toast.success(`Album "${name}" deleted.`);
      loadData();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete album.");
    }
  };

  const displayedImages = selectedAlbum
    ? images.filter(
        (img) => (img.albumName || "").toLowerCase() === selectedAlbum.toLowerCase(),
      )
    : images;

  return (
    <div className="w-full bg-[#07080C] text-white p-3.5 sm:p-6 lg:p-8">
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300 mb-2">
              <Images size={14} /> Campus Digital Assets
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Photo Albums & Campus Gallery
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Curate convocation archives, laboratory infrastructure, and campus event galleries.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={loadData}
              disabled={loading}
              className="p-2 sm:px-3 sm:py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs text-zinc-300 flex items-center gap-1.5 transition"
              title="Refresh"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={() => setIsAlbumModalOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold text-zinc-200 transition"
            >
              <FolderPlus size={15} /> New Album
            </button>
            <button
              onClick={() => {
                if (albums.length > 0 && !imageForm.albumName) {
                  const firstAlb = albums[0].albumName || albums[0].aName || "";
                  setImageForm((prev) => ({ ...prev, albumName: firstAlb }));
                }
                setIsImageModalOpen(true);
              }}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 transition"
            >
              <UploadCloud size={15} /> Upload Media
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-zinc-800/80 pb-3">
          <button
            onClick={() => {
              setActiveTab("albums");
              setSelectedAlbum(null);
            }}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === "albums"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            Albums ({albums.length})
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === "images"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
            }`}
          >
            All Photos ({images.length})
          </button>

          {selectedAlbum && (
            <span className="text-xs text-zinc-400 ml-auto flex items-center gap-2">
              Viewing: <strong className="text-white">{selectedAlbum}</strong>
              <button
                onClick={() => setSelectedAlbum(null)}
                className="text-indigo-400 hover:underline text-xs"
              >
                (View All)
              </button>
            </span>
          )}
        </div>

        {/* Albums View */}
        {activeTab === "albums" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {albums.map((album) => {
              const name = album.albumName || album.aName || "Campus Album";
              const desc = album.description || album.aDescription || "CIITM Campus Photos";
              const cover = album.coverImage || album.aImage_url || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop";
              const count = album.images?.length || album.imageCount || 0;

              return (
                <div
                  key={album._id}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-950 overflow-hidden shadow-xl hover:border-zinc-700 transition flex flex-col group"
                >
                  <div className="relative h-40 sm:h-44 overflow-hidden bg-zinc-900">
                    <img
                      src={cover}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-white">
                      {count} Photos
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-white line-clamp-1">{name}</h3>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-500">
                      <span className="flex items-center gap-1 text-[11px]">
                        <Calendar size={12} /> {album.createdAt ? new Date(album.createdAt).toLocaleDateString() : "Recent"}
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setSelectedAlbum(name);
                            setActiveTab("images");
                          }}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-indigo-400 hover:bg-indigo-950/30"
                          title="View Album Photos"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteAlbum(album._id, name)}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-rose-950/30"
                          title="Delete Album"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Images Grid */}
        {activeTab === "images" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {displayedImages.map((img) => {
              const url = img.imageUrl || img.image_url || "";
              const title = img.title || "Campus Asset";
              return (
                <div
                  key={img._id}
                  className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-[4/3] cursor-pointer"
                  onClick={() => setPreviewImage(url)}
                >
                  <img
                    src={url}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition p-3 flex flex-col justify-end">
                    <p className="text-xs font-bold text-white truncate">{title}</p>
                    {img.albumName && (
                      <p className="text-[10px] text-indigo-300 truncate">{img.albumName}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "albums" && albums.length === 0 && (
          <div className="text-center py-16 text-zinc-500 rounded-2xl border border-zinc-900 bg-zinc-950/40">
            {loading ? "Loading albums from backend..." : "No photo albums found in database."}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}

      {/* Create Album Modal */}
      {isAlbumModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#0C0D12] p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-base sm:text-lg font-bold text-white">Create New Album</h2>
            <form onSubmit={handleCreateAlbum} className="space-y-3">
              <div>
                <label className="text-xs text-zinc-400">Album Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Annual Convocation 2026"
                  value={albumForm.albumName}
                  onChange={(e) => setAlbumForm({ ...albumForm, albumName: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400">Description</label>
                <textarea
                  rows={3}
                  placeholder="Brief description of the event..."
                  value={albumForm.description}
                  onChange={(e) => setAlbumForm({ ...albumForm, description: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400">Cover Image URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={albumForm.coverImage}
                  onChange={(e) => setAlbumForm({ ...albumForm, coverImage: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsAlbumModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white"
                >
                  Create Album
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload Media Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#0C0D12] p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h2 className="text-base sm:text-lg font-bold text-white">Upload Campus Photo</h2>
            <form onSubmit={handleUploadImage} className="space-y-3">
              <div>
                <label className="text-xs text-zinc-400">Target Album *</label>
                <select
                  required
                  value={imageForm.albumName}
                  onChange={(e) => setImageForm({ ...imageForm, albumName: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  {albums.map((a) => {
                    const name = a.albumName || a.aName || "Album";
                    return (
                      <option key={a._id} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="text-xs text-zinc-400">Photo Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief Guest Inauguration"
                  value={imageForm.title}
                  onChange={(e) => setImageForm({ ...imageForm, title: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400">Image Asset URL *</label>
                <input
                  type="text"
                  required
                  placeholder="https://..."
                  value={imageForm.imageUrl}
                  onChange={(e) => setImageForm({ ...imageForm, imageUrl: e.target.value })}
                  className="w-full mt-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsImageModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
