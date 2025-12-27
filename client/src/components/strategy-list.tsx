import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const strategies = [
  { id: 1, name: "Alpha_Singularity", type: "Implosion", status: "Active", efficiency: 94 },
  { id: 2, name: "Beta_Quantum", type: "Resonance", status: "Active", efficiency: 88 },
  { id: 3, name: "Gamma_Hypergraph", type: "Coherence", status: "Analyzing", efficiency: 76 },
  { id: 4, name: "Delta_Temporal", type: "Ripple", status: "Waiting", efficiency: 0 },
  { id: 5, name: "Omega_W_Series", type: "Convergence", status: "Active", efficiency: 99 },
];

export function StrategyList() {
  return (
    <Card className="border-primary/20 bg-black/40 backdrop-blur-sm tech-border h-full">
      <CardHeader>
        <CardTitle className="text-primary flex justify-between items-center">
          <span>Active Strategies</span>
          <Badge variant="outline" className="font-mono text-xs border-primary text-primary">LIVE</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4">
          <div className="space-y-4">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between p-3 rounded-sm border border-white/5 bg-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none font-display tracking-wide group-hover:text-primary transition-colors">
                    {strategy.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {strategy.type}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs font-mono font-bold ${strategy.efficiency > 90 ? 'text-green-400' : 'text-yellow-400'}`}>
                    {strategy.efficiency}% EFF
                  </span>
                  <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${strategy.efficiency}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
