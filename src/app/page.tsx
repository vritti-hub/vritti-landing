'use client';

import { Button } from 'quantum-ui/Button';
import { Paper } from 'quantum-ui/Paper';
import { TextField } from 'quantum-ui/TextField';
import { Typography } from 'quantum-ui/Typography';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, name });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Paper variant="standard" sx={{ py: 8, px: 4, textAlign: 'center', backgroundColor: 'background.default' }}>
        <Typography variant="h1" sx={{ mb: 3, color: 'primary.main' }}>
          Vritti AI
        </Typography>
        <Typography variant="h2" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', color: 'text.primary' }}>
          Transform Your Business with Intelligent AI Solutions
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, maxWidth: '600px', mx: 'auto', color: 'text.secondary' }}>
          Harness the power of cutting-edge artificial intelligence to automate processes, 
          gain deep insights, and unlock unprecedented growth for your organization.
        </Typography>
        <Button 
          intent="primary" 
          size="large"
        >
          Get Started Today
        </Button>
      </Paper>

      {/* Features Section */}
      <Paper variant="standard" sx={{ py: 8, px: 4, backgroundColor: 'background.paper' }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
          Why Choose Vritti AI?
        </Typography>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <Paper variant="elevated" sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
              🚀 Advanced Automation
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Streamline complex workflows and eliminate repetitive tasks with our intelligent automation platform.
            </Typography>
          </Paper>

          <Paper variant="elevated" sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
              📊 Data-Driven Insights
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Transform raw data into actionable intelligence with our powerful analytics and machine learning models.
            </Typography>
          </Paper>

          <Paper variant="elevated" sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
              🔧 Easy Integration
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Seamlessly integrate with your existing systems through our robust APIs and flexible deployment options.
            </Typography>
          </Paper>
        </div>
      </Paper>

      {/* Benefits Section */}
      <Paper variant="standard" sx={{ py: 8, px: 4, backgroundColor: 'background.default' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
              Unlock Your Business Potential
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              • <strong>Increase Efficiency:</strong> Reduce manual work by up to 70% with intelligent automation
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              • <strong>Enhanced Decision Making:</strong> Make data-driven decisions with real-time insights
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              • <strong>Scalable Solutions:</strong> Grow your AI capabilities as your business expands
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              • <strong>24/7 Support:</strong> Our expert team ensures smooth operations around the clock
            </Typography>
            <Button intent="secondary" size="large">
              Learn More
            </Button>
          </div>
          
          <Paper variant="glass" sx={{ p: 1, backgroundColor: 'background.paper' }}>
            <div style={{ 
              height: '300px', 
              backgroundColor: '#f0f9ff', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed #3b82f6'
            }}>
              <Typography variant="h3" sx={{ color: 'primary.main' }}>
                AI Dashboard Preview
              </Typography>
            </div>
          </Paper>
        </div>
      </Paper>

      {/* Contact Form Section */}
      <Paper variant="standard" sx={{ py: 8, px: 4, backgroundColor: 'background.paper' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 4, color: 'text.primary' }}>
            Ready to Transform Your Business?
          </Typography>
          <Typography variant="body1" sx={{ mb: 6, color: 'text.secondary' }}>
            Get started with a free consultation and see how Vritti AI can revolutionize your operations.
          </Typography>
          
          <Paper variant="elevated" sx={{ p: 4, backgroundColor: 'background.default' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <TextField
                label="Full Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Business Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                intent="primary" 
                size="large"
                fullWidth
              >
                Request Free Consultation
              </Button>
            </form>
          </Paper>
        </div>
      </Paper>

      {/* Footer */}
      <Paper variant="standard" sx={{ py: 4, px: 4, backgroundColor: 'primary.main', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2, color: 'white' }}>
            Vritti AI
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            © 2024 Vritti AI. Transforming businesses through intelligent automation.
          </Typography>
        </div>
      </Paper>
    </div>
  );
}