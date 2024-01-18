import { AuthProvider } from "../contexts/AuthContext";

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
