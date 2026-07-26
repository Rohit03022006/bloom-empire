export default function SectionSkeleton() {
  return (
    <div className="w-full py-12 px-4 sm:px-6 animate-pulse" aria-hidden="true">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Title skeleton */}
        <div
          className="h-8 sm:h-10 w-1/3 mx-auto rounded-full skeleton-shimmer"
        />
        {/* Subtitle skeleton */}
        <div
          className="h-4 w-1/2 mx-auto rounded-full skeleton-shimmer"
        />
        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-56 sm:h-64 rounded-2xl skeleton-shimmer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
