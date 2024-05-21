import { Nav, NavLink } from "@/components/Nav";

<<<<<<< HEAD
=======
export const dynamic = "force-dynamic";

>>>>>>> 244b1e5e463b83e668cb25fdb4ae52901c0491d7
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
