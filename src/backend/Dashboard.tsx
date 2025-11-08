import { Card } from "@/components/ui/card";
import { FileText, Briefcase, Users, Mail } from "lucide-react";

const stats = [
  { name: "Total Posts", value: "24", icon: FileText },
  { name: "Case Studies", value: "12", icon: Briefcase },
  { name: "Team Members", value: "8", icon: Users },
  { name: "Form Submissions", value: "156", icon: Mail },
];

const recentActivity = [
  { action: "New post published", item: "IBC Amendments 2024", time: "2 hours ago" },
  { action: "Case study added", item: "High Court Arbitration Matter", time: "5 hours ago" },
  { action: "Form submission", item: "Contact inquiry from Acme Corp", time: "1 day ago" },
  { action: "Attorney profile updated", item: "Senior Partner details", time: "2 days ago" },
];

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="headline text-4xl text-ink-2 mb-2">Dashboard</h1>
        <p className="text-muted">Welcome back to the Varuna CMS</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted mb-1">{stat.name}</p>
                <p className="headline text-3xl text-ink-2">{stat.value}</p>
              </div>
              <stat.icon className="h-8 w-8 text-muted" />
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="headline text-2xl text-ink-2 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, i) => (
            <div key={i} className="flex justify-between items-start py-3 border-b border-line last:border-0">
              <div>
                <p className="text-sm text-ink font-medium">{activity.action}</p>
                <p className="text-sm text-muted">{activity.item}</p>
              </div>
              <span className="text-xs text-muted">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
