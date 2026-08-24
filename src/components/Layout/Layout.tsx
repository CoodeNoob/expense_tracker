import type { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./Layout.css";

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="layout-content">
        <Topbar />
        {children && <section className="layout-page-content">{children}</section>}
      </main>
    </div>
  );
}

export default Layout;
