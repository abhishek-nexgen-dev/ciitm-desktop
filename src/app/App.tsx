import { SocketProvider } from "../Provider/SocketProvider";
import { AppRoutes } from "../routes";
//
function App() {
  return (
    <>
      <SocketProvider>
        <AppRoutes />
      </SocketProvider>
    </>
  );
}

export default App;
