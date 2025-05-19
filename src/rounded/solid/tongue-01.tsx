import React from "react";
const Tongue_01: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m6.3 1.4a.75.75 0 0 1 1.05.15 4.24 4.24 0 0 0 3.4 1.7c1.39 0 2.624-.666 3.4-1.7a.75.75 0 0 1 1.2.9 5.8 5.8 0 0 1-1.85 1.6v1.45a2.75 2.75 0 1 1-5.5 0v-1.45a5.8 5.8 0 0 1-1.85-1.6.75.75 0 0 1 .15-1.05m3.2 3.214v.886a1.25 1.25 0 0 0 2.5 0v-.886a5.8 5.8 0 0 1-2.5 0M8 7.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm7.991 0a1.25 1.25 0 0 0 0 2.5H16a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tongue_01;
