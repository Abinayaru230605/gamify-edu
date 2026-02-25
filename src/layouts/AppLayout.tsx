import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/AppSidebar";
import Chatbot from "@/components/Chatbot";

const AppLayout = () => (
  <div className="flex min-h-screen">
    <AppSidebar />
    <main className="ml-64 flex-1 p-8">
      <Outlet />
    </main>
    <Chatbot />
  </div>
);

export default AppLayout;
