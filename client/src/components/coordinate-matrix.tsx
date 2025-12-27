import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function CoordinateMatrix() {
  const [matrix, setMatrix] = useState<number[]>(Array(13).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setMatrix(Array.from({ length: 13 }, () => Math.random() * 2 - 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-primary/20 bg-black/40 backdrop-blur-sm tech-border mt-6">
      <CardHeader className="py-2">
        <CardTitle className="text-xs font-mono text-muted-foreground uppercase">
          13D Coordinate Stream
        </CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-13 gap-1 font-mono text-[10px]">
          {matrix.map((val, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-muted-foreground/50">D{i+1}</span>
              <span className={val > 0.5 ? "text-primary" : val < -0.5 ? "text-secondary" : "text-muted-foreground"}>
                {val.toFixed(3)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
