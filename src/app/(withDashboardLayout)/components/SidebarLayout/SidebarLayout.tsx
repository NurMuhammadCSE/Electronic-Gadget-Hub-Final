import UserSidebarWrapper from "../Sidebar/useSidebarWrapper";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <UserSidebarWrapper></UserSidebarWrapper>
      {children}
    </div>
  );
}
