import { useEffect } from 'react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
              🔒
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close privacy policy"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 space-y-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          <p>
            Last updated: June 9, 2026. This Privacy Policy describes how{' '}
            <strong className="text-gray-900 dark:text-white">JobPortal</strong> collects, uses, and
            protects your personal information when you use our platform.
          </p>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              1. Information We Collect
            </h3>
            <p>
              We collect information you provide directly, such as your name, email address, and
              professional profile when you register. We also collect usage data (pages visited,
              searches performed) to improve the platform.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              2. How We Use Your Information
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>To create and manage your account.</li>
              <li>To match you with relevant job listings or candidates.</li>
              <li>To send you notifications about applications and saved jobs.</li>
              <li>To improve platform performance and user experience.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              3. Data Storage
            </h3>
            <p>
              Your data is stored locally in your browser using{' '}
              <strong className="text-gray-900 dark:text-white">localStorage</strong>. No personal
              data is transmitted to third-party servers. You can clear this data at any time
              through your browser settings.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              4. Data Sharing
            </h3>
            <p>
              We do not sell, trade, or share your personal information with third parties.
              Employer profiles you apply to will only see the information included in your
              application.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              5. Your Rights
            </h3>
            <p>
              You have the right to access, correct, or delete your personal data at any time.
              You can manage your profile information from your account settings or contact us
              to request full data removal.
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

export default PrivacyPolicyModal;
