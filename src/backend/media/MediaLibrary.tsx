import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Search, Image as ImageIcon, FileText } from "lucide-react";

const mockMedia = [
  { id: 1, name: "office-exterior.jpg", type: "image", size: "2.4 MB", date: "2024-03-15" },
  { id: 2, name: "team-photo.jpg", type: "image", size: "3.1 MB", date: "2024-03-14" },
  { id: 3, name: "legal-document.pdf", type: "pdf", size: "1.2 MB", date: "2024-03-13" },
  { id: 4, name: "case-study-doc.pdf", type: "pdf", size: "856 KB", date: "2024-03-12" },
];

const MediaLibrary = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="headline text-4xl text-ink-2 mb-2">Media Library</h1>
          <p className="text-muted">Manage images and documents</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      <Card className="p-6 mb-6">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted" />
            <Input placeholder="Search media..." className="pl-9" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockMedia.map((item) => (
          <Card key={item.id} className="p-4 cursor-pointer hover:border-ink transition-colors">
            <div className="aspect-square bg-panel rounded-md flex items-center justify-center mb-3">
              {item.type === "image" ? (
                <ImageIcon className="h-12 w-12 text-muted" />
              ) : (
                <FileText className="h-12 w-12 text-muted" />
              )}
            </div>
            <p className="text-sm font-medium truncate mb-1">{item.name}</p>
            <div className="flex justify-between text-xs text-muted">
              <span>{item.size}</span>
              <span>{item.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;
