import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const generateData = () => {
  return Array.from({ length: 13 }, (_, i) => ({
    subject: `Dim ${i + 1}`,
    A: Math.floor(Math.random() * 100),
    B: Math.floor(Math.random() * 100),
    fullMark: 100,
  }));
};

const data = generateData();

export function PulseVisualizer() {
  return (
    <Card className="border-primary/20 bg-black/40 backdrop-blur-sm tech-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <span className="inline-block w-2 h-2 bg-primary animate-pulse rounded-full" />
          13D Hypergraph Projection
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="hsl(var(--primary)/0.2)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontFamily: 'var(--font-mono)' }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Quantum State"
              dataKey="A"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
            />
            <Radar
              name="W-Series"
              dataKey="B"
              stroke="hsl(var(--secondary))"
              strokeWidth={2}
              fill="hsl(var(--secondary))"
              fillOpacity={0.2}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend wrapperStyle={{ fontFamily: 'var(--font-mono)' }} />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
