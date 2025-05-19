import React from "react";
const Kettlebell: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 10c1.212-3.27 1.82-4.398 1.33-5.633a3.3 3.3 0 0 0-.635-1.013c-1.672-1.805-9.719-1.805-11.39 0-.27.291-.485.635-.635 1.013C5.18 5.602 5.789 6.73 7 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 16h1.5m-9 0H9"
      />
      <circle
        cx={12}
        cy={16}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8a8 8 0 0 0-8 8c0 2.39 1.5 5 3 6h10c1.5-1 3-3.61 3-6a8 8 0 0 0-8-8Z"
      />
    </svg>
  );
};
export default Kettlebell;
