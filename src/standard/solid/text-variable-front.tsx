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
        fillRule="evenodd"
        d="M1 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.5a1 1 0 1 1-2 0V4H7v10h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2H5V4H3v.5a1 1 0 0 1-2 0zM13 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.5a1 1 0 1 1-2 0V4h-2v10h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5V4h-2v.5a1 1 0 1 1-2 0zM1 19a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M13 19a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M15 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    </svg>
  );
};
export default TextVariableFront;
