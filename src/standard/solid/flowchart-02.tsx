import React from "react";
const Flowchart_02: React.FC<
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
        d="M11 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-2a2 2 0 0 0-2 2H6a3 3 0 0 0-3 3v3.438A2.75 2.75 0 1 0 6.563 21H9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2H6.563A2.76 2.76 0 0 0 5 17.438V14a1 1 0 0 1 1-1h3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-1a2 2 0 0 0-2-2zm8 4a2 2 0 0 1-2 2h-2v2h2a2 2 0 0 1 2 2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flowchart_02;
