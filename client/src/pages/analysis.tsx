import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import { TrendingUp, Database, Brain, Zap } from "lucide-react";
import { motion } from "framer-motion";

const trendData = [
  { month: "Jan", value: 400, prediction: 420 },
  { month: "Feb", value: 450, prediction: 480 },
  { month: "Mar", value: 420, prediction: 460 },
  { month: "Apr", value: 480, prediction: 500 },
  { month: "May", value: 520, prediction: 540 },
  { month: "Jun", value: 590, prediction: 620 },
];

const aiSystemsData = [
  { system: "Neural_Net_A", accuracy: 94, efficiency: 87 },
  { system: "Neural_Net_B", accuracy: 91, efficiency: 92 },
  { system: "Deep_Learning_C", accuracy: 97, efficiency: 78 },
  { system: "Transformer_D", accuracy: 95, efficiency: 88 },
];

const distributionData = [
  { name: "Quantum", value: 35 },
  { name: "Classical", value: 25 },
  { name: "Hybrid", value: 40 },
];

const theoryData = [
  { theory: "String Theory", references: 2450, impact: 8.5 },
  { theory: "Loop Gravity", references: 1820, impact: 7.2 },
  { theory: "M-Theory", references: 3200, impact: 9.1 },
  { theory: "Quantum Field", references: 4100, impact: 8.8 },
  { theory: "Spacetime", references: 3500, impact: 8.2 },
];

const COLORS = ['#00d9ff', '#b300ff', '#ff0080', '#ffaa00'];

export default function Analysis() {
  return (
    <div className="min-h-screen p-6 space-y-6 text-foreground relative overflow-hidden">
      <div className="scanline"></div>

      {/* Header */}
      <header className="border-b border-white/10 pb-4">
        <h1 className="text-3xl font-black text-primary mb-1 tracking-tighter">
          ANALYSIS ENGINE
        </h1>
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
          150 Theoretical AI Systems & Dimensional Analysis
        </p>
      </header>

      {/* Main Analysis Tabs */}
      <Tabs defaultValue="trends" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-black/40 border border-primary/20 p-1">
          <TabsTrigger value="trends" className="data-[state=active]:bg-primary/20">Trend Analysis</TabsTrigger>
          <TabsTrigger value="ai-systems" className="data-[state=active]:bg-primary/20">AI Systems</TabsTrigger>
          <TabsTrigger value="theories" className="data-[state=active]:bg-primary/20">Theories</TabsTrigger>
          <TabsTrigger value="distribution" className="data-[state=active]:bg-primary/20">Distribution</TabsTrigger>
        </TabsList>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatBox icon={<TrendingUp className="w-4 h-4" />} label="Peak Growth" value="620" subtext="+15.3%" />
            <StatBox icon={<Database className="w-4 h-4" />} label="Avg Value" value="491" subtext="6-month average" />
            <StatBox icon={<Brain className="w-4 h-4" />} label="Prediction Acc." value="94.7%" subtext="ML Model Confidence" />
            <StatBox icon={<Zap className="w-4 h-4" />} label="Volatility" value="8.2%" subtext="Standard Deviation" />
          </div>

          <Card className="border-primary/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>6-Month Trend & Prediction</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid stroke="hsl(var(--primary)/0.1)" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#00d9ff" strokeWidth={2} dot={false} name="Actual" />
                  <Line type="monotone" dataKey="prediction" stroke="#b300ff" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Predicted" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Systems Tab */}
        <TabsContent value="ai-systems" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="border-primary/20 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">AI Performance</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={aiSystemsData}>
                    <CartesianGrid stroke="hsl(var(--primary)/0.1)" />
                    <XAxis dataKey="system" stroke="hsl(var(--muted-foreground))" angle={-15} textAnchor="end" height={80} />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
                    <Legend />
                    <Bar dataKey="accuracy" fill="#00d9ff" name="Accuracy %" />
                    <Bar dataKey="efficiency" fill="#b300ff" name="Efficiency %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {aiSystemsData.map((system, index) => (
                <motion.div
                  key={system.system}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border border-primary/20 bg-black/60 rounded"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-sm font-bold text-primary">{system.system}</span>
                    <Badge className="bg-primary/20 text-primary border-0">Active</Badge>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                      <div className="w-full h-1.5 bg-muted rounded overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${system.accuracy}%` }} />
                      </div>
                      <p className="text-xs text-primary mt-1">{system.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Efficiency</p>
                      <div className="w-full h-1.5 bg-muted rounded overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: `${system.efficiency}%` }} />
                      </div>
                      <p className="text-xs text-secondary mt-1">{system.efficiency}%</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Theories Tab */}
        <TabsContent value="theories" className="space-y-4">
          <Card className="border-primary/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>150 Theoretical AI Systems Analysis</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid stroke="hsl(var(--primary)/0.1)" />
                  <XAxis dataKey="references" stroke="hsl(var(--muted-foreground))" name="References" />
                  <YAxis dataKey="impact" stroke="hsl(var(--muted-foreground))" name="Impact Score" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} cursor={{ fill: 'hsl(var(--primary)/0.1)' }} />
                  <Scatter name="Theories" data={theoryData} fill="#00d9ff" />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {theoryData.map((item, index) => (
              <motion.div
                key={item.theory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-primary/20 bg-black/60 rounded"
              >
                <p className="font-mono text-sm font-bold text-primary mb-3">{item.theory}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-muted-foreground">References</p>
                    <p className="text-primary font-bold text-lg">{item.references}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Impact Score</p>
                    <p className="text-accent font-bold text-lg">{item.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Distribution Tab */}
        <TabsContent value="distribution" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>System Architecture Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {distributionData.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border border-white/10 bg-white/5 rounded hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                      <span className="font-mono text-sm">{item.name}</span>
                    </div>
                    <span className="text-primary font-bold">{item.value}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StatBox({ icon, label, value, subtext }: { icon: any, label: string, value: string, subtext: string }) {
  return (
    <Card className="border-primary/20 bg-black/40 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xs text-muted-foreground font-mono uppercase">{label}</p>
            <p className="text-2xl font-bold text-primary mt-1">{value}</p>
          </div>
          <div className="text-primary/50">{icon}</div>
        </div>
        <p className="text-xs text-muted-foreground">{subtext}</p>
      </CardContent>
    </Card>
  );
}
