import BottomNavigation from "./common/BottomNavigation";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col items-center overflow-auto">
      <main className="w-full max-w-xl pb-16">{children}</main>
      <BottomNavigation />
    </div>
  );
}
