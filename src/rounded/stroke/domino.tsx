import React from "react";
const Domino: React.FC<
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
        strokeWidth={1.5}
        d="M19 16c0 2.828 0 4.243-1.025 5.121S15.3 22 12 22s-4.95 0-5.975-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243 1.025-5.121S8.7 2 12 2s4.95 0 5.975.879C19 3.757 19 5.172 19 8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 18h-.009m-4.99-2h-.009M12.008 7h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 12H5"
      />
    </svg>
  );
};
export default Domino;
