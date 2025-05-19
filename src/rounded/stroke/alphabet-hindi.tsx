import React from "react";
const AlphabetHindi: React.FC<
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
        d="M5.6 5.657c1.2-1.172 4.2-2.343 6-1.172 3.349 2.18 1.2 5.858-2.4 6.444 1.6 0 4.8.703 4.8 3.515 0 4.35-4.8 6.74-8.4 4.965S2 14.757 2 13"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 10c-.948 3.75-4.027 3.246-5.8 2.394"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 5v15M16 4c1.5.433 3.5.866 6 0"
      />
    </svg>
  );
};
export default AlphabetHindi;
