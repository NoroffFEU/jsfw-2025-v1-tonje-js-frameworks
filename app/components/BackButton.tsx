"use client";

import { useRouter } from "next/navigation";

/**
 * Back button component that navigates to the previous page when clicked.
 * @returns The back button component.
 */
export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 flex items-center gap-2 text-text-secondary hover:text-text hover:underline"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  );
}