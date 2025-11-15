import { Header } from "@/components/v2/layout/Header";
import { Footer } from "@/components/v2/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactV2 = () => {
  return (
    <div className="min-h-screen bg-v2-bg">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-v2-bg via-v2-panel to-v2-accent-soft">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-v2-text-headline">
              Get in Touch
            </h1>
            <p className="text-xl text-v2-text-main max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help with your legal needs
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-v2-panel">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-v2-surface rounded-3xl p-8 border-2 border-v2-gray-2">
                <h2 className="font-serif text-3xl font-bold mb-8 text-v2-text-headline">
                  Send us a message
                </h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-v2-text-main">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="mt-2 h-12 rounded-xl border-2 border-v2-gray-2 focus:border-v2-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-v2-text-main">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 h-12 rounded-xl border-2 border-v2-gray-2 focus:border-v2-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-v2-text-main">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2 h-12 rounded-xl border-2 border-v2-gray-2 focus:border-v2-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-v2-text-main">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your legal matter..."
                      rows={6}
                      className="mt-2 rounded-xl border-2 border-v2-gray-2 focus:border-v2-accent"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-v2-accent hover:bg-v2-accent/90 text-v2-text-inverse rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-8 text-v2-text-headline">
                    Contact Information
                  </h2>
                  <p className="text-lg text-v2-text-main leading-relaxed mb-8">
                    Our team is here to answer your questions and provide the legal support you need.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-v2-accent to-blue-600 rounded-2xl flex-shrink-0">
                      <MapPin className="text-v2-text-inverse" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-v2-text-headline mb-1">Office Address</h3>
                      <p className="text-v2-text-main">
                        123 Legal District<br />
                        Hyderabad, Telangana 500001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-v2-accent-alt to-yellow-600 rounded-2xl flex-shrink-0">
                      <Phone className="text-v2-text-inverse" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-v2-text-headline mb-1">Phone</h3>
                      <p className="text-v2-text-main">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-600 to-v2-accent rounded-2xl flex-shrink-0">
                      <Mail className="text-v2-text-inverse" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-v2-text-headline mb-1">Email</h3>
                      <p className="text-v2-text-main">info@varunalaw.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex-shrink-0">
                      <Clock className="text-v2-text-inverse" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-v2-text-headline mb-1">Business Hours</h3>
                      <p className="text-v2-text-main">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
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

export default ContactV2;
