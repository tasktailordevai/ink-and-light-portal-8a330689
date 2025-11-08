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

const mockAttorneys = [
  {
    id: 1,
    name: "Adv. Rajesh Kumar",
    role: "Senior Partner",
    practiceAreas: ["Corporate Law", "Arbitration"],
    status: "active",
  },
  {
    id: 2,
    name: "Adv. Priya Sharma",
    role: "Partner",
    practiceAreas: ["IBC", "Real Estate"],
    status: "active",
  },
];

const AttorneysList = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="headline text-4xl text-ink-2 mb-2">Attorneys</h1>
          <p className="text-muted">Manage team member profiles</p>
        </div>
        <Link to="/admin/attorneys/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Attorney
          </Button>
        </Link>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Practice Areas</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAttorneys.map((attorney) => (
              <TableRow key={attorney.id}>
                <TableCell className="font-medium">{attorney.name}</TableCell>
                <TableCell>{attorney.role}</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    {attorney.practiceAreas.map((area) => (
                      <Badge key={area} variant="secondary">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="default">{attorney.status}</Badge>
                </TableCell>
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

export default AttorneysList;
