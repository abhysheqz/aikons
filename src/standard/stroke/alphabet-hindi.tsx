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
        d="M5.6 5.657c1.2-1.172 4.2-2.343 6-1.172 3.349 2.18 1 5.93-2.6 6.515 1.6 0 5 .632 5 3.444 0 4.35-4.8 6.74-8.4 4.965S2 13 2 13"
      />
      <path
        fill="currentColor"
        d="M19.729 10.18a.75.75 0 0 0-1.456-.36zm-6.559 3.548c1.017.498 2.376.746 3.657.258 1.32-.504 2.384-1.722 2.901-3.805l-1.455-.362c-.431 1.736-1.23 2.479-1.98 2.765-.79.301-1.706.168-2.463-.203z"
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
