import { useEffect } from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { useToast } from "@/hooks/use-toast";
import student7 from "@/assets/student7.jpg";

const Contact = () => {

   useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-24 pb-12 bg-primary min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={student7}
            alt="Students celebrating at a school event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <p className="text-secondary font-medium text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Our Programs
          </h1>

          <p className="text-primary-foreground/80 text-lg">
            Delivering community-centered programs that address barriers to
            education and create pathways to opportunity.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-serif font-bold mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    maxLength={100}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    maxLength={255}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  maxLength={200}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  maxLength={2000}
                  rows={5}
                  className="mt-1"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Address</p>
                  <p className="text-muted-foreground text-sm">
                    Juba, South Sudan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-muted-foreground text-sm">
                    info@waneducation.org
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <p className="text-muted-foreground text-sm">
                    +211 (0) XXX XXX XXX
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-card rounded-lg border">
              <h3 className="font-serif font-semibold mb-3">Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Stay updated on our work and impact.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  type="email"
                  className="flex-1"
                />
                <Button
                  size="sm"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
