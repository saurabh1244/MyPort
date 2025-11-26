import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus('loading');
    
    try {
      // Create form data
      const form = e.target;
      const netlifyFormData = new FormData(form);
      
      // Check honeypot field
      if (netlifyFormData.get('bot-field')) {
        setFormStatus('error');
        setSubmitMessage('[ ERROR: BOT DETECTED ]');
        return;
      }
      
      // Encode form data for Netlify
      const encodedData = new URLSearchParams(netlifyFormData).toString();
      
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: encodedData,
      });
      
      if (response.ok) {
        setFormStatus('success');
        setSubmitMessage('[ MESSAGE SENT! ]');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setErrors({});
        
        // Reset message after 3 seconds
        setTimeout(() => {
          setSubmitMessage('[ SEND MESSAGE ]');
          setIsSubmitting(false);
          setFormStatus('idle');
        }, 3000);
      } else {
        setFormStatus('error');
        setSubmitMessage('[ ERROR: SUBMISSION FAILED ]');
        
        // Reset message after 3 seconds
        setTimeout(() => {
          setSubmitMessage('[ SEND MESSAGE ]');
          setIsSubmitting(false);
          setFormStatus('idle');
        }, 3000);
      }
    } catch (error) {
      setFormStatus('error');
      setSubmitMessage('[ ERROR: SUBMISSION FAILED ]');
      
      // Reset message after 3 seconds
      setTimeout(() => {
        setSubmitMessage('[ SEND MESSAGE ]');
        setIsSubmitting(false);
        setFormStatus('idle');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">
              <span className="title-bracket">[</span>
              GET IN TOUCH
              <span className="title-bracket">]</span>
            </h2>
            <p className="contact-description">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">&gt; EMAIL:</span>
                <span className="contact-value">xiorabh@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">&gt; LOCATION:</span>
                <span className="contact-value">Bhilai Chhattishgarh</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">&gt; AVAILABILITY:</span>
                <span className="contact-value status-available">● At Night</span>
              </div>
            </div>
          </div>
          <form 
            className="contact-form" 
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Netlify required hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            
            <div className="form-group">
              <label htmlFor="name">&gt; NAME:</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..." 
                required 
              />
              {errors.name && (
                <p className="error-message">{errors.name}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">&gt; EMAIL:</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email..." 
                required 
              />
              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">&gt; MESSAGE:</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                placeholder="Enter your message..." 
                required 
              />
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {submitMessage || '[ SEND MESSAGE ]'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;