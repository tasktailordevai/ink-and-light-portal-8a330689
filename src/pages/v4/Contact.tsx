import { useState } from "react";
import { Header } from "@/components/v4/layout/Header";
import { Footer } from "@/components/v4/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Calendar, MessageCircle } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

const ContactV4 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="v4-theme min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-6 bg-background border-b border-line">
          <div className="mono-container">
            <div className="max-w-3xl">
              <BlurText
                text="Contact Us"
                delay={300}
                animateBy="words"
                direction="top"
                className="text-5xl sm:text-6xl font-semibold mb-4 tracking-tight text-foreground"
                style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", "Libre Baskerville", "Georgia", serif' }}
              />
              <p className="text-xl text-foreground leading-relaxed">
                Get in touch to discuss your legal requirements. We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pt-12 pb-24">
          <div className="mono-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="border-line" style={{ backgroundColor: "#002366" }}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-white">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-line"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-line"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-line"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="border-line"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="border-line resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto" style={{ backgroundColor: "#002366", color: "#ffffff" }}>
                        Submit Inquiry
                      </Button>

                      <p className="text-xs text-white/80">
                        * Required fields. By submitting this form, you agree to our privacy policy 
                        and consent to be contacted regarding your inquiry.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-line" style={{ backgroundColor: "#002366" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-white">Office Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                      <div className="text-sm">
                        <p className="font-medium mb-1 text-white">Address</p>
                        <p className="leading-relaxed text-white">
                          Level 3, Commercial Tower<br />
                          Banjara Hills<br />
                          Hyderabad 500034<br />
                          Telangana, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                      <div className="text-sm">
                        <p className="font-medium mb-1 text-white">Phone</p>
                        <a href="tel:+914012345678" className="hover:text-white/80 transition-colors text-white">
                          +91 40 1234 5678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" />
                      <div className="text-sm">
                        <p className="font-medium mb-1 text-white">Email</p>
                        <a href="mailto:contact@varunalaw.in" className="hover:text-white/80 transition-colors text-white">
                          contact@varunalaw.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-line" style={{ backgroundColor: "#002366" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild style={{ borderColor: "#ffffff", color: "#ffffff", backgroundColor: "transparent" }}>
                      <a href="https://calendly.com/varunalaw" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book on Calendly
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild style={{ borderColor: "#ffffff", color: "#ffffff", backgroundColor: "transparent" }}>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <div className="text-xs text-foreground leading-relaxed">
                  <p className="font-medium text-foreground mb-2">Office Hours</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactV4;

