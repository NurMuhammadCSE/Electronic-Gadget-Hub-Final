/* eslint-disable @typescript-eslint/no-unused-vars */

export default function UserSidebarWrapper() {
  return (
    <div className="flex">
      {/* <Sidebar>
        <SidebarItem
          icon={<Home size={20} />}
          text="Dashboard"
          active={true}
          href="/dashboard"
        />
        <SidebarItem
          icon={<List size={20} />}
          text="Orders"
          active={false}
          href="/dashboard/admin/orders"
        />
        <SidebarItem
          icon={<ShoppingCart size={20} />}
          text="Products"
          active={false}
          href="/dashboard/admin/products"
        />
        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
          active={false}
          href="/dashboard/admin/products/add-product"
        />
      </Sidebar> */}

      <main className="flex-1 p-6">
        {/* Dashboard Content */}
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        {/* Your dashboard content goes here */}
      </main>
    </div>
  );
}
