import React from "react";
const Smile: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m6.3 2.4a.75.75 0 0 1 1.05.15 4.24 4.24 0 0 0 3.4 1.7c1.39 0 2.624-.666 3.4-1.7a.75.75 0 0 1 1.2.9 5.74 5.74 0 0 1-4.6 2.3 5.74 5.74 0 0 1-4.6-2.3.75.75 0 0 1 .15-1.05M8 7.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm7.991 0a1.25 1.25 0 0 0 0 2.5H16a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Smile;
