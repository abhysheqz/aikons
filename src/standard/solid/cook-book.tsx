import React from "react";
const CookBook: React.FC<
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
        d="M20 18a1.5 1.5 0 0 0 0 3 1 1 0 1 1 0 2 3.5 3.5 0 1 1 0-7 1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 19.5A3.5 3.5 0 0 1 6.5 16H20a1 1 0 1 1 0 2H6.5a1.5 1.5 0 0 0 0 3H20a1 1 0 1 1 0 2H6.5A3.5 3.5 0 0 1 3 19.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1a3 3 0 0 0-3 3v15.5h2A1.5 1.5 0 0 1 6.5 18H20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm11 7.5a2 2 0 0 1-2 2v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a2 2 0 1 1 1.112-3.662 2 2 0 0 1 3.776 0A2 2 0 0 1 17 8.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CookBook;
