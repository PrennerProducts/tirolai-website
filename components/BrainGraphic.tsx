'use client';

export default function BrainGraphic() {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="aiGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M180 100c-60 0-100 50-100 100s40 100 100 100c-10 30 10 70 50 70 30 0 40-30 40-50 20 10 50 10 60-10 10-20 0-40-20-60 30 0 50-30 50-60s-20-60-50-60c10-20-10-50-40-50s-40 30-50 50c-10-20-30-50-50-50z"
        stroke="url(#aiGradient)"
        strokeWidth="4"
        fill="none"
        filter="url(#glow)"
      />
      <circle cx="180" cy="100" r="6" fill="url(#aiGradient)" />
      <circle cx="250" cy="100" r="6" fill="url(#aiGradient)" />
      <circle cx="280" cy="160" r="6" fill="url(#aiGradient)" />
      <circle cx="230" cy="210" r="6" fill="url(#aiGradient)" />
      <circle cx="190" cy="200" r="6" fill="url(#aiGradient)" />
    </svg>
  );
}
