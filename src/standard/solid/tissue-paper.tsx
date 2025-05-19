import React from "react";
const TissuePaper: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 4a1 1 0 0 1 1-1h12.818c1.34 0 2.409.851 3.094 1.928C22.604 6.016 23 7.458 23 9c0 .668-.074 1.314-.213 1.918-.213.932-.57 2.018-.926 3.108-.162.495-.325.991-.474 1.474-.501 1.616-.887 3.163-.887 4.5a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1c0-1.683.543-3.506 1.102-5.15q.226-.66.444-1.275c.421-1.195.8-2.267.998-3.214.225-1.072.046-2.48-.533-3.598C7.943 5.661 7.088 5 6 5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.98 6.2C3.394 7.005 3 8.17 3 9.5s.394 2.494.98 3.3C4.568 13.61 5.294 14 6 14s1.432-.391 2.02-1.2c.586-.806.98-1.97.98-3.3s-.394-2.494-.98-3.3C7.432 5.39 6.706 5 6 5s-1.432.391-2.02 1.2M2.363 5.022C3.223 3.84 4.497 3 6 3s2.777.84 3.637 2.023C10.498 6.207 11 7.793 11 9.5s-.502 3.293-1.363 4.477C8.777 15.16 7.503 16 6 16s-2.777-.84-3.637-2.023C1.502 12.793 1 11.207 1 9.5s.502-3.293 1.363-4.477"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.008 9.5a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TissuePaper;
