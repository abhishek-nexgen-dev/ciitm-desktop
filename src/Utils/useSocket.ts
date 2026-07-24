import { useSocketContext } from "../Provider/SocketProvider";

export const useSocket = () => {
  const { socket } = useSocketContext();

  if (!socket) {
    throw new Error("useSocket must be used inside SocketProvider");
  }

  return socket;
};
