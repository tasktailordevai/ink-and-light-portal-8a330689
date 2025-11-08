import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save } from "lucide-react";

const Settings = () => {
  const [firmName, setFirmName] = useState("Varuna Law Associates LLP");
  const [email, setEmail] = useState("contact@varunalaw.com");
  const [phone, setPhone] = useState("+91 40 1234 5678");
  const [address, setAddress] = useState("");

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="headline text-4xl text-ink-2 mb-2">Settings</h1>
          <p className="text-muted">Manage site configuration</p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="users">Users & Roles</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="p-6">
            <h3 className="font-medium text-lg mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="firmName">Firm Name</Label>
                <Input
                  id="firmName"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Contact Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="address">Office Address</Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter full office address"
                  className="mt-1"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card className="p-6">
            <h3 className="font-medium text-lg mb-4">Integrations</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="calendly">Calendly URL</Label>
                <Input
                  id="calendly"
                  placeholder="https://calendly.com/your-link"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input
                  id="whatsapp"
                  placeholder="+91 9876543210"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="ga">Google Analytics ID</Label>
                <Input
                  id="ga"
                  placeholder="G-XXXXXXXXXX"
                  className="mt-1"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card className="p-6">
            <h3 className="font-medium text-lg mb-4">Users & Roles</h3>
            <p className="text-muted text-sm">User management interface will be implemented after backend integration.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
