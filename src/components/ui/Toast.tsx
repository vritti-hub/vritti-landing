'use client';

import React, { createContext, useContext, useCallback, useState, ReactNode } from 'react';
import { Paper } from '@vritti/quantum-ui/Paper';
import { Typography } from '@vritti/quantum-ui/Typography';
import { Button } from '@vritti/quantum-ui/Button';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
  warning: (title: string, message?: string) => void;
  info: (title: string, message?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 11);
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration ?? 5000,
    };

    setToasts(prev => [...prev, newToast]);

    // Auto remove toast after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }
  }, [removeToast]);

  const success = useCallback((title: string, message?: string) => {
    addToast({ type: 'success', title, message });
  }, [addToast]);

  const error = useCallback((title: string, message?: string) => {
    addToast({ type: 'error', title, message });
  }, [addToast]);

  const warning = useCallback((title: string, message?: string) => {
    addToast({ type: 'warning', title, message });
  }, [addToast]);

  const info = useCallback((title: string, message?: string) => {
    addToast({ type: 'info', title, message });
  }, [addToast]);

  return (
    <ToastContext.Provider value={{
      addToast,
      removeToast,
      success,
      error,
      warning,
      info,
    }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        maxWidth: '400px',
        width: '100%',
      }}
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
};

interface ToastItemProps {
  toast: Toast;
  onRemove: () => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const getToastStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: 'var(--quantum-color-feedback-success-subtle)',
          borderColor: 'var(--quantum-color-feedback-success)',
          iconColor: 'var(--quantum-color-feedback-success)',
          icon: '✅',
        };
      case 'error':
        return {
          backgroundColor: 'var(--quantum-color-feedback-error-subtle)',
          borderColor: 'var(--quantum-color-feedback-error)',
          iconColor: 'var(--quantum-color-feedback-error)',
          icon: '❌',
        };
      case 'warning':
        return {
          backgroundColor: 'var(--quantum-color-feedback-warning-subtle)',
          borderColor: 'var(--quantum-color-feedback-warning)',
          iconColor: 'var(--quantum-color-feedback-warning)',
          icon: '⚠️',
        };
      case 'info':
        return {
          backgroundColor: 'var(--quantum-color-action-primary-subtle)',
          borderColor: 'var(--quantum-color-action-primary)',
          iconColor: 'var(--quantum-color-action-primary)',
          icon: 'ℹ️',
        };
      default:
        return {
          backgroundColor: 'var(--quantum-color-surface-elevated)',
          borderColor: 'var(--quantum-color-border-default)',
          iconColor: 'var(--quantum-color-text-primary)',
          icon: 'ℹ️',
        };
    }
  };

  const styles = getToastStyles(toast.type);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-50px) scale(0.9)',
        transition: 'all 0.3s ease-out',
      }}
    >
      <Paper
        variant="surface"
        sx={{
          p: 2,
          backgroundColor: styles.backgroundColor,
          border: `1px solid ${styles.borderColor}`,
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <div style={{ fontSize: '1.25rem', marginTop: '0.125rem' }}>
            {styles.icon}
          </div>
          
          <div style={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: 'var(--quantum-color-text-primary)',
                mb: toast.message ? 0.5 : 0,
              }}
            >
              {toast.title}
            </Typography>
            
            {toast.message && (
              <Typography
                variant="body2"
                intent="secondary"
                sx={{ lineHeight: 1.4 }}
              >
                {toast.message}
              </Typography>
            )}
            
            {toast.action && (
              <div style={{ marginTop: '0.75rem' }}>
                <Button
                  intent="secondary"
                  size="small"
                  onClick={toast.action.onClick}
                  sx={{
                    fontSize: '0.875rem',
                    padding: '0.25rem 0.75rem',
                  }}
                >
                  {toast.action.label}
                </Button>
              </div>
            )}
          </div>
          
          <Button
            intent="ghost"
            onClick={onRemove}
            sx={{
              minWidth: 'auto',
              width: '24px',
              height: '24px',
              padding: 0,
              borderRadius: '50%',
              fontSize: '0.875rem',
              color: 'var(--quantum-color-text-secondary)',
              '&:hover': {
                backgroundColor: 'var(--quantum-color-surface-subtle)',
              },
            }}
          >
            ✕
          </Button>
        </div>
      </Paper>
    </div>
  );
};