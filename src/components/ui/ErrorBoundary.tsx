'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';
import { Button } from 'quantum-ui/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you would send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // TODO: Send to error reporting service (e.g., Sentry)
      // reportError(error, errorInfo);
    }
    
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Paper
          variant="elevated"
          sx={{
            p: 4,
            m: 2,
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
            mt: 8,
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          
          <Typography variant="h2" sx={{ mb: 2, color: 'var(--quantum-color-feedback-error)' }}>
            Something went wrong
          </Typography>
          
          <Typography variant="body1" intent="secondary" sx={{ mb: 3 }}>
            We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
          </Typography>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              intent="primary"
              onClick={this.handleRetry}
              sx={{ minWidth: '120px' }}
            >
              Try Again
            </Button>
            
            <Button
              intent="secondary"
              onClick={() => window.location.reload()}
              sx={{ minWidth: '120px' }}
            >
              Refresh Page
            </Button>
          </div>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left' }}>
              <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                <Typography variant="body2" sx={{ display: 'inline' }}>
                  Error Details (Development)
                </Typography>
              </summary>
              <pre
                style={{
                  background: 'var(--quantum-color-surface-subtle)',
                  padding: '1rem',
                  borderRadius: '8px',
                  overflow: 'auto',
                  fontSize: '0.875rem',
                  color: 'var(--quantum-color-text-primary)',
                }}
              >
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </Paper>
      );
    }

    return this.props.children;
  }
}