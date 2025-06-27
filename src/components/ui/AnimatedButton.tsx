
// components/ui/AnimatedButton.tsx
'use client';
import { Button, ButtonProps } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
  hoverScale?: number;
  tapScale?: number;
  transition?: {
    duration?: number;
    ease?: string;
  };
  motionProps?: any;
}

const AnimatedButton = ({
  children,
  hoverScale = 1.05,
  tapScale = 0.98,
  transition = { duration: 0.2 },
  motionProps = {},
  ...props
}: AnimatedButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={transition}
      {...motionProps}
    >
      <Button {...props}>
        {children}
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;