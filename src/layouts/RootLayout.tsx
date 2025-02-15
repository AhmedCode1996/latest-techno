import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      {/* Add your header, navigation, etc. here */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      {/* Add your footer here */}
    </div>
  );
}
