import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

// import { FaFacebook } from '@/utils/firebase';
import { appleProvider, auth, googleProvider } from '@/utils/firebase';
import type { Language } from '@/utils/translations';
import { translations } from '@/utils/translations';

type AuthView = 'login' | 'confirmEmail' | 'success';

interface IAuthProps {
  language: Language;
  onClose?: () => void;
  searchQuery?: string;
  category?: number;
}

const Auth: FC<IAuthProps> = ({ language, onClose, searchQuery, category }) => {
  const t = translations[language];
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [view, setView] = useState<AuthView>('login');

  const createWantedAd = async () => {
    if (!auth.currentUser) {
      setError('Failed to save contact information.'); // TODO
      return;
    }
    if (!searchQuery && !category) {
      setError('A query or category is required.'); // TODO
      return;
    }
    try {
      const db = getFirestore();
      await setDoc(doc(db, 'wanteds', auth.currentUser.uid), {
        searchQuery: searchQuery ?? null,
        category: Number.isNaN(category) ? null : category,
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
      });
      sessionStorage.setItem('showWantedCreatedToast', 'true');
      const path = language === 'nl' ? '/nl/' : '/';
      router.push(path);
    } catch (e: any) {
      setError(`Failed to create ad because: ${e.message}`); // TODO
    }
  };

  const handleEmailSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        setView('confirmEmail');
      }
    } catch (e: any) {
      setError('Failed to sign in with email and password'); // TODO
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      if (auth.currentUser) {
        await createWantedAd();
      }
    } catch (e: any) {
      setError('Failed to sign in with Google'); // TODO
    }
  };

  const handleAppleSignIn = async () => {
    try {
      await signInWithPopup(auth, appleProvider);
      if (auth.currentUser) {
        await createWantedAd();
      }
    } catch (e: any) {
      setError('Failed to sign in with Apple'); // TODO
    }
  };

  const handleCheckEmailVerification = async () => {
    if (auth.currentUser) {
      await auth.currentUser.reload();
      if (auth.currentUser.emailVerified) {
        await createWantedAd();
      } else {
        setError('Email not verified yet. Please check your inbox.'); // TODO
      }
    }
  };

  const handleResendVerificationEmail = async () => {
    if (auth.currentUser) {
      try {
        await sendEmailVerification(auth.currentUser);
        setError('Verification email sent! Please check your inbox.'); // TODO
      } catch (e: any) {
        setError(`Failed to resend email.`); // TODO
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="animate-fadeIn relative w-full max-w-sm rounded-3xl border border-white/30 bg-white p-8 shadow-2xl backdrop-blur-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {view === 'login' && (
          <>
            <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-800">
              {t.marketplace.auth.title}
            </h2>

            {error && (
              <p className="mb-4 rounded-md bg-red-100/80 px-3 py-2 text-center text-sm text-red-600">
                {error}
              </p>
            )}

            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-gray-300 p-3 text-sm outline-none transition-all focus:border-main-500 focus:ring-2 focus:ring-main-200"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl border border-gray-300 p-3 text-sm outline-none transition-all focus:border-main-500 focus:ring-2 focus:ring-main-200"
              />
              <button
                onClick={handleEmailSignUp}
                className="w-full rounded-xl bg-gradient-to-r from-[#1c5f3e] to-[#2e8b57] py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-[#174d33] hover:to-[#26734a] hover:shadow-xl"
              >
                {t.marketplace.auth.email}
              </button>

              <div className="relative flex items-center justify-center">
                <span className="absolute bg-white/70 px-2 text-xs text-gray-500">
                  {t.marketplace.auth.or}
                </span>
                <div className="w-full border-t border-gray-300"></div>
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-main-300 hover:bg-gray-50 hover:shadow-md"
              >
                <FcGoogle className="text-lg" />
                {t.marketplace.auth.google}
              </button>

              {/* <button
                onClick={handleFacebookSignIn}
                className="flex items-center justify-center gap-2 border border-gray-300 
                           rounded-xl py-3 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md 
                           transform hover:-translate-y-0.5 transition-all text-blue-600"
              >
                <FaFacebook />
                {t.marketplace.auth.facebook}
              </button> */}

              <button
                onClick={handleAppleSignIn}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-main-300 hover:bg-gray-50 hover:shadow-md"
              >
                <FaApple className="text-lg" />
                {t.marketplace.auth.apple}
              </button>
            </div>
          </>
        )}

        {view === 'confirmEmail' && (
          <div className="flex flex-col items-center space-y-6 py-4">
            <img
              src="/assets/images/logo.webp" // Assuming logo is here
              alt="Plantative Logo"
              className="mb-4 size-20 object-contain"
            />
            <h2 className="text-center text-2xl font-extrabold text-gray-800">
              {t.marketplace.auth.confirmEmail}
            </h2>
            <p className="text-center text-sm text-gray-600">
              {t.marketplace.auth.confirmEmailSubTitle}
            </p>

            {error && (
              <p className="mb-4 rounded-md bg-red-100/80 px-3 py-2 text-center text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              onClick={handleCheckEmailVerification}
              className="w-full rounded-xl bg-gradient-to-r from-[#1c5f3e] to-[#2e8b57] py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:from-[#174d33] hover:to-[#26734a] hover:shadow-xl"
            >
              {t.marketplace.auth.continue}
            </button>
            <button
              onClick={handleResendVerificationEmail}
              className="w-full rounded-xl border border-gray-300 bg-white py-3 font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-main-300 hover:bg-gray-50 hover:shadow-md"
            >
              {t.marketplace.auth.resendEmail}
            </button>
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.35s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Auth;
