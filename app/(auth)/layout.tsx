export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='auth-container'>{children}</div>;
}
