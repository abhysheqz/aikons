import React from "react";
const Euro: React.FC<
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
        d="M5 10h8M5 14h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 17.608C17.87 19.64 15.812 21 13.461 21 9.894 21 7 17.866 7 14v-4c0-3.866 2.893-7 6.461-7C15.813 3 17.87 4.36 19 6.392"
      />
    </svg>
  );
};
export default Euro;
