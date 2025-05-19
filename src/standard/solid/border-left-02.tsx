import React from "react";
const BorderLeft_02: React.FC<
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
        d="M5.5 3.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h1a1 1 0 1 1 0 2h-1a4 4 0 0 1-4-4v-13a4 4 0 0 1 4-4h1a1 1 0 0 1 0 2zm3.5-1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m7.75 0a1 1 0 0 1 1-1h.75a4 4 0 0 1 4 4v.75a1 1 0 1 1-2 0V5.5a2 2 0 0 0-2-2h-.75a1 1 0 0 1-1-1M21.5 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 7.75a1 1 0 0 1 1 1v.75a4 4 0 0 1-4 4h-.75a1 1 0 1 1 0-2h.75a2 2 0 0 0 2-2v-.75a1 1 0 0 1 1-1M9 21.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderLeft_02;
