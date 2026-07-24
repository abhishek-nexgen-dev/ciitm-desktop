import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const connectSocket = (token?: string) => {
  if (socket?.connected) return socket;

  socket = io(import.meta.env.VITE_SOCKET_URL, {
    transports: ["websocket"],
    autoConnect: true,
    withCredentials: true,

    auth: {
      token,
    },
  });

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
