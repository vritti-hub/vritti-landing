'use client';

import { Typography } from 'quantum-ui/Typography';
import { Paper } from 'quantum-ui/Paper';
import { motion } from 'framer-motion';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';

export default function Privacy() {
  const lastUpdated = '2024-06-16';

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative' }}>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-brand)',
            py: 6,
            px: 2,
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <GradientText
              variant="h1"
              gradient="hero"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              Privacy Policy
            </GradientText>
            
            <Typography
              variant="body1"
              intent="secondary"
              sx={{
                fontSize: '1.125rem',
                mb: 2,
              }}
            >
              Last updated: {lastUpdated}
            </Typography>
          </div>
        </Paper>
      </section>

      {/* Content */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Introduction */}
              <div>
                <Typography variant="body1" intent="primary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  At {SITE_CONFIG.name}, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website and use our services.
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                  please do not access or use our services.
                </Typography>
              </div>

              {/* Information We Collect */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Information We Collect
                </Typography>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Personal Information
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  We may collect personal information that you voluntarily provide when you:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Fill out our contact form</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Subscribe to our newsletter</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Request a demo or consultation</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Create an account or use our services</Typography></li>
                </ul>

                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Usage Information
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  We automatically collect certain information when you visit our website, including:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">IP address and location data</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Browser type and version</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Pages visited and time spent</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Device information</Typography></li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  How We Use Your Information
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  We use the information we collect to:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Provide and maintain our services</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Respond to your inquiries and requests</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Send you updates about our services</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Improve our website and services</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Analyze usage patterns and trends</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Comply with legal obligations</Typography></li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Cookies and Tracking Technologies
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  We use cookies and similar tracking technologies to enhance your browsing experience:
                </Typography>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Essential Cookies
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  Required for basic website functionality, including security, authentication, and your privacy preferences.
                </Typography>

                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Analytics Cookies
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  Help us understand how visitors use our website so we can improve the user experience.
                </Typography>

                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Marketing Cookies
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                  Used to deliver personalized advertisements and measure campaign effectiveness.
                </Typography>
              </div>

              {/* Data Sharing */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  How We Share Your Information
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  We do not sell, trade, or rent your personal information. We may share information in the following situations:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">With service providers who help us operate our business</Typography></li>
                  <li><Typography variant="body1" intent="secondary">When required by law or to protect our rights</Typography></li>
                  <li><Typography variant="body1" intent="secondary">In connection with a business transaction (merger, acquisition, etc.)</Typography></li>
                  <li><Typography variant="body1" intent="secondary">With your explicit consent</Typography></li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Data Security
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                  the internet is 100% secure, and we cannot guarantee absolute security.
                </Typography>
              </div>

              {/* Your Rights */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Your Privacy Rights
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  Depending on your location, you may have the following rights:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Access your personal information</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Correct inaccurate information</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Delete your personal information</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Restrict processing of your information</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Data portability</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Withdraw consent</Typography></li>
                </ul>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  To exercise these rights, please contact us at{' '}
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    style={{ color: 'var(--quantum-color-action-primary)', textDecoration: 'underline' }}
                  >
                    {CONTACT_INFO.email}
                  </a>
                </Typography>
              </div>

              {/* Children's Privacy */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Children's Privacy
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If you become aware that a child has provided us 
                  with personal information, please contact us immediately.
                </Typography>
              </div>

              {/* Changes to Policy */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Changes to This Privacy Policy
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </Typography>
              </div>

              {/* Contact Information */}
              <div
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--quantum-color-surface-subtle)',
                  borderRadius: '12px',
                  border: '1px solid var(--quantum-color-border-subtle)',
                }}
              >
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Contact Us
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  If you have any questions about this Privacy Policy, please contact us:
                </Typography>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Typography variant="body1" intent="primary">
                    Email: <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      style={{ color: 'var(--quantum-color-action-primary)', textDecoration: 'underline' }}
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </Typography>
                  
                  <Typography variant="body1" intent="primary">
                    Website: <a 
                      href={SITE_CONFIG.url}
                      style={{ color: 'var(--quantum-color-action-primary)', textDecoration: 'underline' }}
                    >
                      {SITE_CONFIG.url}
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
          </motion.div>
        </Paper>
      </section>
    </div>
  );
}