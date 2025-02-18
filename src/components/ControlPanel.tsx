import React, { useState } from "react";
import { Button } from "./ui/button";
import { RotateCw, RefreshCw, RotateCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ControlPanelProps {
  onToggleRotation?: () => void;
  onResetCamera?: () => void;
  isRotating?: boolean;
}

const ControlPanel = ({
  onToggleRotation = () => {},
  onResetCamera = () => {},
  isRotating = false,
}: ControlPanelProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border flex gap-4 items-center justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={onToggleRotation}
              className="w-10 h-10"
            >
              {isRotating ? (
                <RotateCw className="h-5 w-5" />
              ) : (
                <RotateCcw className="h-5 w-5" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isRotating ? "Stop Rotation" : "Start Rotation"}</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={onResetCamera}
              className="w-10 h-10"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Reset Camera Position</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ControlPanel;
