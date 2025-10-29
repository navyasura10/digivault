import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const categories = [
    "Study Planners",
    "Daily Planners",
    "UI/UX Templates",
    "Research Papers",
    "Design Assets"
  ];

  const fileTypes = ["PDF", "Figma", "AI", "DOCX", "PNG"];

  return (
    <Card className="p-6 sticky top-20">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4" data-testid="text-filter-title">Filters</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full mb-4 hover-elevate"
            data-testid="button-clear-filters"
          >
            Clear All
          </Button>
        </div>

        <div>
          <h4 className="font-medium mb-3">Category</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox 
                  id={category}
                  data-testid={`checkbox-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                />
                <Label
                  htmlFor={category}
                  className="text-sm cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <h4 className="font-medium mb-3">Price Range</h4>
          <div className="space-y-4">
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={5}
              className="mb-2"
              data-testid="slider-price-range"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span data-testid="text-price-min">$0</span>
              <span data-testid="text-price-max">$100+</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h4 className="font-medium mb-3">File Type</h4>
          <div className="space-y-2">
            {fileTypes.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox 
                  id={type}
                  data-testid={`checkbox-filetype-${type.toLowerCase()}`}
                />
                <Label
                  htmlFor={type}
                  className="text-sm cursor-pointer"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
