export function WaveDivider({ fill = '#ffffff', flip = false, className = '' }) {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block w-full h-12 sm:h-16 lg:h-20 ${flip ? 'rotate-180' : ''}`}
      >
        <path
          fill={fill}
          d="M0,96 C120,64 240,32 420,48 C600,64 720,112 900,96 C1080,80 1200,32 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}