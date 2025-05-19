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
        d="M17 10c1.212-3.27 1.82-4.398 1.33-5.633a3.3 3.3 0 0 0-.635-1.013c-1.672-1.805-9.719-1.805-11.39 0-.27.291-.485.635-.635 1.013C5.18 5.602 5.788 6.73 7 10M15 16h2M7 16h2"
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
        strokeWidth={1.5}
        d="M12 8a8 8 0 0 0-5.292 14h10.584A8 8 0 0 0 12 8Z"
      />
    </svg>
  );
};
export default Kettlebell;
