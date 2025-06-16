import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--quantum-color-text-accent)', marginBottom: '1rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Page Not Found
      </h2>
      <p style={{ marginBottom: '2rem', color: 'var(--quantum-color-text-secondary)' }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: 'var(--quantum-color-action-primary)', color: 'var(--quantum-color-text-on-primary)', textDecoration: 'none', borderRadius: '0.5rem' }}>
        Go Home
      </Link>
    </div>
  );
}