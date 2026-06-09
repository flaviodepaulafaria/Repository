import { useEffect } from 'react';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
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
              📄
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close terms of service"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 space-y-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          <p>
            Last updated: June 9, 2026. By accessing or using <strong className="text-gray-900 dark:text-white">JobPortal</strong>, you
            agree to be bound by these Terms of Service. Please read them carefully before using the platform.
          </p>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              1. Acceptance of Terms
            </h3>
            <p>
              By creating an account or using JobPortal in any way, you confirm that you are at least 18 years
              old and have the legal capacity to enter into this agreement. If you are using the platform on
              behalf of an organization, you represent that you have the authority to bind that organization.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              2. Use of the Platform
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>You may use JobPortal only for lawful purposes and in accordance with these Terms.</li>
              <li>Job seekers may create one personal account and apply to job listings honestly and accurately.</li>
              <li>Employers may post genuine job openings and must not misrepresent role details or compensation.</li>
              <li>You must not scrape, harvest, or automate access to the platform without prior written consent.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              3. Account Responsibilities
            </h3>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials and for all
              activity that occurs under your account. Notify us immediately at{' '}
              <a href="mailto:support@jobportal.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                support@jobportal.com
              </a>{' '}
              if you suspect unauthorized access.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              4. Content
            </h3>
            <p>
              Users retain ownership of content they submit (resumes, job postings, messages). By submitting
              content, you grant JobPortal a non-exclusive, worldwide, royalty-free license to display and
              distribute that content solely to operate the platform. We reserve the right to remove any content
              that violates these Terms or applicable law.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              5. Intellectual Property
            </h3>
            <p>
              The JobPortal name, logo, design, and software are the exclusive property of JobPortal and may
              not be copied, modified, or used without prior written permission.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              6. Disclaimer of Warranties
            </h3>
            <p>
              JobPortal is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the
              platform will be error-free, uninterrupted, or that job listings are accurate and up to date.
              Use of the platform is at your own risk.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              7. Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by law, JobPortal shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of the platform, including
              but not limited to loss of employment opportunity or data.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              8. Changes to Terms
            </h3>
            <p>
              We may update these Terms from time to time. Continued use of the platform after changes are
              posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
              9. Contact
            </h3>
            <p>
              Questions about these Terms? Reach us at{' '}
              <a href="mailto:legal@jobportal.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                legal@jobportal.com
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
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
