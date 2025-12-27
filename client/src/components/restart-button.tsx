import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCw, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function RestartButton() {
  const [isRestarting, setIsRestarting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRestart = async () => {
    setIsRestarting(true);
    setIsSuccess(false);

    // 模擬重啟延遲
    setTimeout(() => {
      setIsRestarting(false);
      setIsSuccess(true);

      // 2秒後隱藏成功狀態
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="relative">
      <Button
        onClick={handleRestart}
        disabled={isRestarting}
        className={`font-mono text-xs sm:text-sm transition-all ${
          isSuccess
            ? "bg-green-500/20 border-green-500/50 text-green-400"
            : isRestarting
            ? "bg-primary/20 border-primary/50 text-primary"
            : "border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
        } border`}
      >
        {isRestarting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block mr-2"
            >
              <RotateCw className="h-4 w-4" />
            </motion.div>
            RESTARTING...
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            RESTARTED
          </>
        ) : (
          <>
            <RotateCw className="mr-2 h-4 w-4" />
            RESTART WORKFLOW
          </>
        )}
      </Button>

      <AnimatePresence>
        {isRestarting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded border border-primary/50 pointer-events-none"
            style={{
              animation: "pulse 1s infinite",
              boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
