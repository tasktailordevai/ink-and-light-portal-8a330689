import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Eye, Trash2 } from "lucide-react";

const mockSubmissions = [
  {
    id: 1,
    name: "Acme Corporation",
    email: "legal@acme.com",
    phone: "+91 9876543210",
    subject: "Corporate Law Consultation",
    date: "2024-03-15",
    status: "new",
  },
  {
    id: 2,
    name: "Tech Ventures Pvt Ltd",
    email: "info@techventures.com",
    phone: "+91 9876543211",
    subject: "Real Estate Dispute",
    date: "2024-03-14",
    status: "contacted",
  },
  {
    id: 3,
    name: "Global Industries",
    email: "contact@global.com",
    phone: "+91 9876543212",
    subject: "Arbitration Matter",
    date: "2024-03-13",
    status: "resolved",
  },
];

const FormSubmissions = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="headline text-4xl text-ink-2 mb-2">Form Submissions</h1>
          <p className="text-muted">View and manage contact inquiries</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSubmissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{submission.name}</TableCell>
                <TableCell>{submission.email}</TableCell>
                <TableCell>{submission.phone}</TableCell>
                <TableCell>{submission.subject}</TableCell>
                <TableCell>{submission.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      submission.status === "new"
                        ? "default"
                        : submission.status === "contacted"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {submission.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default FormSubmissions;
