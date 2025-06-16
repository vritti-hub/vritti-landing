'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paper } from 'quantum-ui/Paper';
import { Typography } from 'quantum-ui/Typography';
import { Button } from 'quantum-ui/Button';
import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'vritti-cookie-consent';
const COOKIE_PREFERENCES_KEY = 'vritti-cookie-preferences';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      // Delay showing banner to not interfere with page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    saveConsent(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveConsent(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    saveConsent(onlyNecessary);
    setIsVisible(false);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    
    // In a real app, you would initialize analytics/marketing scripts here
    if (prefs.analytics) {
      // Initialize Google Analytics
      console.log('Analytics cookies accepted - would initialize GA here');
    }
    
    if (prefs.marketing) {
      // Initialize marketing pixels (Facebook, Google Ads, etc.)
      console.log('Marketing cookies accepted - would initialize marketing pixels here');
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10000,
          padding: '1rem',
        }}
      >
        <Paper
          variant="elevated"
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            p: 3,
            backgroundColor: 'var(--quantum-color-surface-elevated)',
            border: '1px solid var(--quantum-color-border-accent)',
            borderRadius: '12px 12px 0 0',
            boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🍪</div>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: 'var(--quantum-color-text-primary)',
                }}
              >
                Cookie Preferences
              </Typography>
            </div>

            {/* Main content */}
            <Typography
              variant="body1"
              intent="secondary"
              sx={{ lineHeight: 1.6 }}
            >
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              You can manage your preferences below or read our{' '}
              <Link 
                href="/privacy" 
                style={{ 
                  color: 'var(--quantum-color-action-primary)',
                  textDecoration: 'underline',
                }}
              >
                Privacy Policy
              </Link>{' '}
              for more details.
            </Typography>

            {/* Cookie preferences details */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: 'var(--quantum-color-surface-subtle)',
                      borderRadius: '8px',
                      marginTop: '1rem',
                    }}
                  >
                    {/* Necessary Cookies */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Necessary Cookies
                        </Typography>
                        <Typography variant="body2" intent="secondary">
                          Required for basic site functionality and security.
                        </Typography>
                      </div>
                      <div
                        style={{
                          width: '48px',
                          height: '24px',
                          borderRadius: '12px',
                          backgroundColor: 'var(--quantum-color-action-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          padding: '2px',
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                          }}
                        />
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Analytics Cookies
                        </Typography>
                        <Typography variant="body2" intent="secondary">
                          Help us understand how visitors use our site.
                        </Typography>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('analytics')}
                        style={{
                          width: '48px',
                          height: '24px',
                          borderRadius: '12px',
                          backgroundColor: preferences.analytics 
                            ? 'var(--quantum-color-action-primary)' 
                            : 'var(--quantum-color-surface-secondary)',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: preferences.analytics ? 'flex-end' : 'flex-start',
                          padding: '2px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                          }}
                        />
                      </button>
                    </div>

                    {/* Marketing Cookies */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Marketing Cookies
                        </Typography>
                        <Typography variant="body2" intent="secondary">
                          Used to deliver personalized advertisements.
                        </Typography>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange('marketing')}
                        style={{
                          width: '48px',
                          height: '24px',
                          borderRadius: '12px',
                          backgroundColor: preferences.marketing 
                            ? 'var(--quantum-color-action-primary)' 
                            : 'var(--quantum-color-surface-secondary)',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: preferences.marketing ? 'flex-end' : 'flex-start',
                          padding: '2px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons */}
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button
                  intent="secondary"
                  onClick={() => setShowDetails(!showDetails)}
                  sx={{
                    fontSize: '0.875rem',
                    padding: '0.5rem 1rem',
                  }}
                >
                  {showDetails ? 'Hide' : 'Manage'} Preferences
                </Button>
                
                <Button
                  intent="ghost"
                  onClick={handleRejectAll}
                  sx={{
                    fontSize: '0.875rem',
                    padding: '0.5rem 1rem',
                    color: 'var(--quantum-color-text-secondary)',
                  }}
                >
                  Reject All
                </Button>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {showDetails && (
                  <Button
                    intent="secondary"
                    onClick={handleAcceptSelected}
                    sx={{
                      fontSize: '0.875rem',
                      padding: '0.5rem 1.5rem',
                    }}
                  >
                    Save Preferences
                  </Button>
                )}
                
                <Button
                  intent="primary"
                  onClick={handleAcceptAll}
                  sx={{
                    fontSize: '0.875rem',
                    padding: '0.5rem 1.5rem',
                    fontWeight: 600,
                  }}
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
}