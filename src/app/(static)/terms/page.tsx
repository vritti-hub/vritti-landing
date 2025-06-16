'use client';

import { Typography } from 'quantum-ui/Typography';
import { Paper } from 'quantum-ui/Paper';
import { motion } from 'framer-motion';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';

export default function Terms() {
  const lastUpdated = '2024-06-16';
  const effectiveDate = '2024-06-16';

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
              Terms of Service
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
                  Welcome to {SITE_CONFIG.name}. These Terms of Service ("Terms") govern your use of our website 
                  and services. By accessing or using our services, you agree to be bound by these Terms.
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Please read these Terms carefully before using our services. If you do not agree with these Terms, 
                  you may not use our services.
                </Typography>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Acceptance of Terms
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  By accessing and using {SITE_CONFIG.name} ("Service"), you accept and agree to be bound by the terms 
                  and provision of this agreement. These Terms are effective as of {effectiveDate}.
                </Typography>
              </div>

              {/* Description of Service */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Description of Service
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  {SITE_CONFIG.name} provides AI-powered business operating system solutions for small businesses, including:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Customer relationship management</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Appointment scheduling and booking</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Inventory management</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Financial analytics and reporting</Typography></li>
                  <li><Typography variant="body1" intent="secondary">WhatsApp business integration</Typography></li>
                  <li><Typography variant="body1" intent="secondary">AI-powered business insights</Typography></li>
                </ul>
              </div>

              {/* User Accounts */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  User Accounts and Registration
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  To access certain features of our Service, you may need to create an account. You agree to:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Provide accurate and complete information</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Maintain the security of your account credentials</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Update your information as needed</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Notify us immediately of any unauthorized use</Typography></li>
                </ul>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You are responsible for all activities that occur under your account.
                </Typography>
              </div>

              {/* Acceptable Use */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Acceptable Use Policy
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  You agree not to use our Service to:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Violate any applicable laws or regulations</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Infringe on intellectual property rights</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Transmit harmful or malicious content</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Interfere with the operation of our services</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Attempt unauthorized access to our systems</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Use the service for spam or unsolicited communications</Typography></li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Intellectual Property Rights
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  The Service and its original content, features, and functionality are owned by {SITE_CONFIG.name} 
                  and are protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws.
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You retain ownership of content you create using our Service, while granting us a license to 
                  provide the Service to you.
                </Typography>
              </div>

              {/* Privacy */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Privacy and Data Protection
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Your privacy is important to us. Our collection and use of personal information is governed by our{' '}
                  <a 
                    href="/privacy"
                    style={{ color: 'var(--quantum-color-action-primary)', textDecoration: 'underline' }}
                  >
                    Privacy Policy
                  </a>, which is incorporated into these Terms by reference.
                </Typography>
              </div>

              {/* Payments and Billing */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Payments and Billing
                </Typography>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Subscription Fees
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  Our Service is provided on a subscription basis. Current pricing is available on our website and 
                  may be updated from time to time.
                </Typography>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Payment Terms
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Subscription fees are billed in advance monthly or annually</Typography></li>
                  <li><Typography variant="body1" intent="secondary">All fees are non-refundable except as required by law</Typography></li>
                  <li><Typography variant="body1" intent="secondary">You authorize us to charge your payment method automatically</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Failed payments may result in service suspension</Typography></li>
                </ul>
                
                <Typography variant="h3" sx={{ fontWeight: 600, mb: 2 }}>
                  Cancellation
                </Typography>
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You may cancel your subscription at any time. Cancellation will be effective at the end of your 
                  current billing period.
                </Typography>
              </div>

              {/* Service Availability */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Service Availability and Modifications
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  We strive to provide reliable service but cannot guarantee 100% uptime. We may:
                </Typography>
                <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><Typography variant="body1" intent="secondary">Modify or discontinue features with notice</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Perform maintenance that may temporarily affect service</Typography></li>
                  <li><Typography variant="body1" intent="secondary">Update our Terms with advance notice</Typography></li>
                </ul>
              </div>

              {/* Disclaimers */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Disclaimers and Limitation of Liability
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, 
                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  IN NO EVENT SHALL {SITE_CONFIG.name.toUpperCase()} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE.
                </Typography>
              </div>

              {/* Indemnification */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Indemnification
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  You agree to indemnify and hold harmless {SITE_CONFIG.name} from any claims, damages, or expenses 
                  arising from your use of the Service or violation of these Terms.
                </Typography>
              </div>

              {/* Termination */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Termination
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, 
                  for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </Typography>
              </div>

              {/* Governing Law */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Governing Law and Dispute Resolution
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  These Terms are governed by and construed in accordance with the laws of California, United States, 
                  without regard to conflict of law principles.
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  Any disputes arising from these Terms will be resolved through binding arbitration in accordance 
                  with the rules of the American Arbitration Association.
                </Typography>
              </div>

              {/* Changes to Terms */}
              <div>
                <Typography variant="h2" intent="brand" sx={{ fontWeight: 600, mb: 3 }}>
                  Changes to These Terms
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7 }}>
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                  by email or through the Service. Continued use of the Service after changes constitutes acceptance 
                  of the new Terms.
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
                  Contact Information
                </Typography>
                
                <Typography variant="body1" intent="secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                  If you have any questions about these Terms of Service, please contact us:
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