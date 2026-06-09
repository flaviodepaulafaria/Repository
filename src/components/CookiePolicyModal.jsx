import { useEffect } from 'react';

const CookiePolicyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-xl">
              🍪
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Cookie Policy
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close cookie policy"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 space-y-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          <p>
            Last updated: June 9, 2026. This Cookie Policy explains how <strong className="text-gray-900 dark:text-white">JobPortal</strong> uses
            cookies and similar technologies when you visit our platform.
          </p>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              1. What Are Cookies?
            </h3>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help us
              remember your preferences, keep you signed in, and understand how you use the platform so
              we can improve it.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              2. Types of Cookies We Use
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold">✓</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Strictly Necessary</strong> — Required for core
                  functionality such as authentication and session management. Cannot be disabled.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">i</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Functional</strong> — Remember your preferences
                  (e.g., dark/light theme, saved filters) to personalize your experience.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center text-xs font-bold">~</span>
                <div>
                  <strong className="text-gray-900 dark:text-white">Analytics</strong> — Collect anonymized data about
                  how pages are used to help us identify and fix issues. No personal data is shared.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              3. Local Storage
            </h3>
            <p>
              In addition to cookies, we use <strong className="text-gray-900 dark:text-white">browser localStorage</strong> to
              persist your session, saved jobs, and application history between visits. This data stays
              on your device and is never transmitted to third-party services.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              4. Third-Party Cookies
            </h3>
            <p>
              We do not use third-party advertising or tracking cookies. Any embedded content (e.g.,
              company logos fetched from external CDNs) may set their own cookies subject to their own
              privacy policies.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              5. Managing Cookies
            </h3>
            <p>
              You can control or delete cookies through your browser settings at any time. Disabling
              strictly necessary cookies will prevent you from logging in and using key features.
              For instructions, visit your browser&apos;s help documentation.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              6. Contact
            </h3>
            <p>
              Questions about this policy? Reach us at{' '}
              <a href="mailto:privacy@jobportal.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                privacy@jobportal.com
              </a>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-semibold transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
