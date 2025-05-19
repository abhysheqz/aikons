import React from "react";
const LayersLogo: React.FC<
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
        d="M8.75 11.5a2.75 2.75 0 0 1 2.75-2.75h8a2.75 2.75 0 0 1 2.75 2.75v8a2.75 2.75 0 0 1-2.75 2.75h-8a2.75 2.75 0 0 1-2.75-2.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 5.25A2.75 2.75 0 0 0 5.25 8v8c0 1.259.846 2.32 2 2.646V11.5a4.25 4.25 0 0 1 4.25-4.25h7.147a2.75 2.75 0 0 0-2.647-2z"
      />
      <path
        fill="currentColor"
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v8c0 1.259.846 2.32 2 2.646V8A4.25 4.25 0 0 1 8 3.75h7.147a2.75 2.75 0 0 0-2.647-2z"
      />
    </svg>
  );
};
export default LayersLogo;
