/**
 * Reusable loading spinner animation.
 * @returns The loading spinner component.
 */
export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-accent"></div>
    </div>
  );
}