'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID_HERE', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID_HERE', // Replace with your EmailJS template ID
        formData,
        'YOUR_PUBLIC_KEY_HERE' // Replace with your EmailJS public key
      );
      setStatus('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "momen.hosny@example.com", href: "mailto:momen.hosny@example.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+20 123 456 7890", href: "tel:+201234567890" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Available Worldwide (Remote)", href: null }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/momen124" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/momen-hosny" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">I'm always interested in discussing new opportunities, collaborating on projects, or simply connecting with fellow developers. Let's build something amazing together!</p>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">Whether you're looking for a backend developer, full-stack engineer, or DevOps specialist, I'd love to hear about your project and discuss how I can contribute to your team's success.</p>
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  {contact.icon}
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-primary hover:underline">{contact.value}</a>
                    ) : (
                      <p>{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                  {social.icon}
                </a>
              ))}
            </div>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </Button>
          </div>
          <Card className="modern-card">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                  <Input id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                </div>
                <Input id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <Input id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <Textarea id="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </Button>
                {status && (
                  <p className={`text-center mt-4 ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;