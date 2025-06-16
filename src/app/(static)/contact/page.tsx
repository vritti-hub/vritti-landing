'use client';

import { Typography } from 'quantum-ui/Typography';
import { Paper } from 'quantum-ui/Paper';
import { Button } from 'quantum-ui/Button';
import { TextField } from 'quantum-ui/TextField';
import { useState } from 'react';
import { CONTACT_INFO, FAQ_ITEMS } from '@/lib/constants/content';
import GradientText from '@/components/ui/GradientText';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { useToast } from '@/components/ui/Toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { success, error: showError } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your business';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showError('Please fix the errors below', 'Some required fields are missing or invalid');
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // In a real app, this would be an API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      success(
        'Message sent successfully!',
        'We&apos;ll get back to you within 24 hours'
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      
    } catch (err) {
      console.error('Contact form submission error:', err);
      showError(
        'Failed to send message',
        'Please try again or contact us via WhatsApp'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative' }}>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-brand)',
            py: 8,
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
                mb: 3,
                intent: 'onPrimary',
              }}
            >
              Get in Touch
            </GradientText>
            
            <Typography
              variant="h3"
              sx={{
                intent: 'secondary',
                fontSize: { xs: '1.125rem', md: '1.25rem' },
                fontWeight: 400,
                mb: 6,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Ready to transform your business? Let's talk about how Vritti AI can help you grow.
            </Typography>
          </div>
        </Paper>
      </section>

      {/* Contact Options */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '3rem',
                alignItems: 'start',
              }}
            >
              {/* Contact Form */}
              <AnimatedCard
                variant="glass"
                sx={{
                  p: 4,
                  backgroundColor: 'var(--quantum-color-surface-accent-subtle)',
                  border: '1px solid var(--quantum-color-border-accent)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    intent: 'onPrimary',
                    fontWeight: 600,
                    mb: 3,
                    textAlign: 'center',
                  }}
                >
                  Send us a Message
                </Typography>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <TextField
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                  
                  <TextField
                    label="Business Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                  
                  <TextField
                    label="Company Name"
                    value={formData.company}
                    onChange={handleChange('company')}
                    fullWidth
                    error={!!errors.company}
                    helperText={errors.company}
                  />
                  
                  <TextField
                    label="Tell us about your business"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange('message')}
                    placeholder="What type of business do you run? What challenges are you facing?"
                    fullWidth
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                  
                  <Button
                    type="submit"
                    intent="primary"
                    size="large"
                    loading={isSubmitting}
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: 'var(--quantum-color-status-success)',
                      color: 'var(--quantum-color-text-on-success)',
                      '&:hover': {
                        backgroundColor: 'var(--quantum-color-status-success-hover)',
                      },
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </AnimatedCard>

              {/* Contact Info & Quick Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* WhatsApp Contact */}
                <AnimatedCard
                  variant="glass"
                  delay={0.2}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: 'var(--quantum-color-surface-success-subtle)',
                    border: '2px solid var(--quantum-color-border-success)',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    📱
                  </div>
                  <Typography
                    variant="h3"
                    sx={{
                      intent: 'success',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    WhatsApp Us
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      intent: 'secondary',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    Get instant responses to your questions. Perfect for quick inquiries!
                  </Typography>
                  <Button
                    intent="primary"
                    size="large"
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'var(--quantum-color-status-success)',
                      '&:hover': {
                        backgroundColor: 'var(--quantum-color-status-success-hover)',
                      },
                    }}
                    fullWidth
                  >
                    Chat on WhatsApp
                  </Button>
                </AnimatedCard>

                {/* Contact Information */}
                <AnimatedCard
                  variant="elevated"
                  delay={0.4}
                  sx={{
                    p: 4,
                    backgroundColor: 'var(--quantum-color-surface-subtle)',
                    border: '1px solid var(--quantum-color-border-subtle)',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      intent: 'onPrimary',
                      fontWeight: 600,
                      mb: 3,
                      textAlign: 'center',
                    }}
                  >
                    Other Ways to Reach Us
                  </Typography>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ fontSize: '1.5rem' }}>📧</div>
                      <div>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                          {CONTACT_INFO.email}
                        </Typography>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ fontSize: '1.5rem' }}>📍</div>
                      <div>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          Location
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'white' }}>
                          {CONTACT_INFO.address}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </Paper>
      </section>

      {/* FAQ Preview */}
      <section>
        <Paper
          variant="standard"
          sx={{
            backgroundColor: 'var(--quantum-color-background-secondary)',
            py: 8,
            px: 2,
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Typography
              variant="h2"
              sx={{
                intent: 'onPrimary',
                fontWeight: 600,
                mb: 6,
                textAlign: 'center',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Quick Answers
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {FAQ_ITEMS.slice(0, 3).map((faq, index) => (
                <AnimatedCard
                  key={index}
                  variant="elevated"
                  delay={index * 0.1}
                  sx={{
                    p: 4,
                    backgroundColor: 'var(--quantum-color-surface-subtle)',
                    border: '1px solid var(--quantum-color-border-subtle)',
                  }}
                >
                  <Typography
                    variant="h4"
                    intent="brand"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      intent: 'secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AnimatedCard>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2,
                }}
              >
                Have more questions?
              </Typography>
              <Button
                intent="secondary"
                component="a"
                href="/pricing#faq"
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  intent: 'onPrimary',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                View All FAQs
              </Button>
            </div>
          </div>
        </Paper>
      </section>
    </div>
  );
}