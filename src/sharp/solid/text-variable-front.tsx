import React from "react";
const TextVariableFront: React.FC<
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
        d="M10 2a1 1 0 0 1 1 1v2H9V4H7v10h1v2H4v-2h1V4H3v1H1V3a1 1 0 0 1 1-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 2h8a1 1 0 0 1 1 1v2h-2V4h-2v10h1v2h-4v-2h1V4h-2v1h-2V3a1 1 0 0 1 1-1M10 20H2v-2h8zM22 20h-8v-2h8z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M9 19a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
    </svg>
  );
};
export default TextVariableFront;
