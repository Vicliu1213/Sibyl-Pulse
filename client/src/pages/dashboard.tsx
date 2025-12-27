import { SystemMonitor } from "@/components/system-monitor";
import { PulseVisualizer } from "@/components/pulse-visualizer";
import { StrategyList } from "@/components/strategy-list";
import { CoordinateMatrix } from "@/components/coordinate-matrix";
import { GlitchText } from "@/components/glitch-text";
import { Terminal, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 space-y-6 text-foreground relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="scanline"></div>
      
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/10 pb-4 gap-4">
        <div>
          <h1 className="text-4xl font-black text-primary mb-1 tracking-tighter flex items-center gap-3">
            <GlitchText text="SIBYL" /> <span className="text-foreground/50 text-2xl font-light">SYSTEM</span>
          </h1>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
            13-Dimensional Hypergraph Pulse Evolution Engine
          </p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end flex-wrap">
          <div className="text-right hidden sm:block">
             <p className="text-xs font-mono text-muted-foreground">SYSTEM STATUS</p>
             <p className="text-sm font-bold text-green-400 flex items-center justify-end gap-2">
               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
               OPERATIONAL
             </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-mono text-xs sm:text-sm">
              <Terminal className="mr-2 h-4 w-4" /> EXECUTE PULSE
            </Button>
            <Link href="/analysis">
              <Button className="bg-secondary/20 border border-secondary/50 text-secondary hover:bg-secondary/30 font-mono text-xs sm:text-sm">
                <BarChart3 className="mr-2 h-4 w-4" /> ANALYSIS
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="space-y-6">
        {/* Top Row: System Stats */}
        <section>
          <SystemMonitor />
        </section>

        {/* Middle Row: Visualization & Strategies */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <PulseVisualizer />
            <CoordinateMatrix />
          </div>
          <div className="lg:col-span-1">
            <StrategyList />
          </div>
        </section>

        {/* Bottom Row: Logs / W-Series Tensor */}
        <section className="grid grid-cols-1 gap-6">
          <div className="p-4 rounded border border-primary/20 bg-black/60 font-mono text-xs h-48 overflow-hidden relative">
            <div className="absolute top-2 right-2 px-2 py-0.5 bg-primary/20 text-primary text-[10px] rounded uppercase border border-primary/20">
              System Logs
            </div>
            <div className="space-y-1 text-green-500/80">
              <p>[14:02:23] Initializing D13 Coordinate Mapper...</p>
              <p>[14:02:24] Quantum Wavefunction initialized (8 qubits).</p>
              <p>[14:02:24] <span className="text-yellow-400">WARNING:</span> Resonance threshold approaching 0.7 limit.</p>
              <p>[14:02:25] Hypergraph Adjacency Matrix generated (13x13).</p>
              <p>[14:02:26] Applying Pulse Compression (Ratio: 0.7)...</p>
              <p>[14:02:27] Singularity Implosion Sequence: <span className="text-blue-400">READY</span></p>
              <p>[14:02:28] W-Series Tensor computed. Convergence radius: 0.94</p>
              <p className="animate-pulse">[14:02:29] Awaiting operator command...</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
