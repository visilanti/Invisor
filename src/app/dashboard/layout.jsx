import Bottombar from "@/components/navigation/dashboard/bottombar";
import Sidebar from "@/components/navigation/dashboard/sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Bottombar />
      <main className="bg-[#504E5A] min-h-screen">{children}</main>
    </>
  );
}
