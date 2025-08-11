import type { FC } from 'react';

import Auth from '@/auth/Auth';
import type { Language } from '@/utils/translations';

interface IAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  searchQuery?: string;
  category?: number;
}

const AuthModal: FC<IAuthModalProps> = ({
  isOpen,
  onClose,
  language,
  searchQuery,
  category,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Auth
        language={language}
        onClose={onClose}
        searchQuery={searchQuery}
        category={category}
      />
    </div>
  );
};

export default AuthModal;
