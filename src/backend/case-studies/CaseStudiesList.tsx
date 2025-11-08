import { Link } from "react-router-dom";
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
import { Plus, Edit, Trash2 } from "lucide-react";

const mockCaseStudies = [
  {
    id: 1,
    title: "High Court Arbitration Matter",
    practiceArea: "Arbitration",
    status: "published",
    amount: "₹50L",
    date: "2024-03-10",
  },
  {
    id: 2,
    title: "NCLT Insolvency Resolution",
    practiceArea: "IBC",
    status: "draft",
    amount: "₹2Cr",
    date: "2024-03-08",
  },
];

const CaseStudiesList = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="headline text-4xl text-ink-2 mb-2">Case Studies</h1>
          <p className="text-muted">Manage case study content</p>
        </div>
        <Link to="/admin/case-studies/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Case Study
          </Button>
        </Link>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Practice Area</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCaseStudies.map((study) => (
              <TableRow key={study.id}>
                <TableCell className="font-medium">{study.title}</TableCell>
                <TableCell>{study.practiceArea}</TableCell>
                <TableCell>{study.amount}</TableCell>
                <TableCell>
                  <Badge variant={study.status === "published" ? "default" : "secondary"}>
                    {study.status}
                  </Badge>
                </TableCell>
                <TableCell>{study.date}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
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

export default CaseStudiesList;
