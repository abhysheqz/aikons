import React from "react";
const ToyTrain: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0M2 4h11M15 12.5h.5M3 4v13a1 1 0 0 0 1 1h1m7 0V4M9 18h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10h4.86a2 2 0 0 1 1.962 1.608c.088.44.166.887.639 1.076a3.67 3.67 0 0 1 2.282 2.999L22 18h-2.5M16 10V7m0 0h-1m1 0h1M6 8h3"
      />
    </svg>
  );
};
export default ToyTrain;
