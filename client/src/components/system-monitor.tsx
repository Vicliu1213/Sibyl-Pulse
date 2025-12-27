import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Zap, Cpu, Network, Waves } from "lucide-react";

export function SystemMonitor() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatusCard 
        title="Pulse Energy" 
        value="98.4%" 
        icon={<Zap className="w-4 h-4 text-yellow-400" />} 
        color="bg-yellow-400"
        subtext="Singularity Implosion Ready"
      />
      <StatusCard 
        title="Coherence" 
        value="72.1%" 
        icon={<Activity className="w-4 h-4 text-primary" />} 
        color="bg-primary"
        subtext="Quantum Resonance Stable"
      />
      <StatusCard 
        title="W-Series Conv." 
        value="45.9%" 
        icon={<Waves className="w-4 h-4 text-secondary" />} 
        color="bg-secondary"
        subtext="Calculating Tensor..."
      />
      <StatusCard 
        title="Active Dims" 
        value="13/13" 
        icon={<Network className="w-4 h-4 text-accent" />} 
        color="bg-accent"
        subtext="Full Spectrum Coverage"
      />
    </div>
  );
}

function StatusCard({ title, value, icon, color, subtext }: { title: string, value: string, icon: any, color: string, subtext: string }) {
  return (
    <Card className="border-primary/20 bg-black/40 backdrop-blur-sm tech-border hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium font-mono text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-display text-glow">{value}</div>
        <Progress value={parseInt(value)} className="h-1 mt-3 bg-muted" indicatorClassName={color} />
        <p className="text-xs text-muted-foreground mt-2 font-mono flex items-center">
          <span className={`w-1.5 h-1.5 rounded-full mr-2 ${color} animate-pulse`}></span>
          {subtext}
        </p>
      </CardContent>
    </Card>
  );
}
