import { createContext, useContext, useEffect, useMemo } from "react";
import { Socket } from "socket.io-client";
import { connectSocket, disconnectSocket } from "../config/socket";

interface SocketContextType {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextType>({
  socket: null,
});

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const socket = useMemo(() => connectSocket(), []);

  useEffect(() => {
    return () => disconnectSocket();
  }, []);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
}

export const useSocketContext = () => useContext(SocketContext);
