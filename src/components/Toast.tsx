import type { PanInfo } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Button } from '@/button/Button';

interface IToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Toast: FC<IToastProps> = ({
  show,
  message,
  onClose,
  buttonText,
  onButtonClick,
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const duration = 10000; // 10 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [show, onClose]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y < -50) {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-x-0 top-6 z-50 mx-auto w-11/12 max-w-lg md:w-auto"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#1c5f3e] to-[#2e8b57] p-4 text-white shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm font-medium">{message}</span>
        </div>
        <div className="flex items-center gap-4">
          {buttonText && onButtonClick && (
            <Button size="sm" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Toast;
