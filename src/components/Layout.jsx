export default function Layout({ children }) {
  return (
    <div className="w-full h-screen flex justify-center overflow-auto">
      <main className="w-full max-w-xl">{children}</main>
    </div>
  );
}
