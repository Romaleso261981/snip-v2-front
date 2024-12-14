export default function Loader() {
  return (
    <div className="absolute inset-0 flex  items-center justify-center z-50 bg-opacity-40 bg-slate-300">
      <div role="status">
        <svg
          className="animate-spin text-blue-500 text-gold"
          width="100"
          height="100"
          viewBox="0 0 38 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M6.19282 28.1497L18.9999 6.68277L31.807 28.1497H6.19282Z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <path
            d="M20.8464 14.9754L11.5 30.8118L2.15369 14.9754L20.8464 14.9754Z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <path
            d="M35.8463 14.9754L26.4999 30.8118L17.1536 14.9754L35.8463 14.9754Z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <path
            d="M28.7796 6.22502L19 22.811L9.22034 6.22502L28.7796 6.22502Z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </svg>
      </div>
    </div>
  );
}
