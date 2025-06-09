import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: '#2563eb', marginBottom: '1rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Page Not Found
      </h2>
      <p style={{ marginBottom: '2rem', color: '#64748b' }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#2563eb', color: 'white', textDecoration: 'none', borderRadius: '0.5rem' }}>
        Go Home
      </Link>
    </div>
  );
}