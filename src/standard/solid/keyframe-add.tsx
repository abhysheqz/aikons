import React from "react";
const KeyframeAdd: React.FC<
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
        d="M20 2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2h-2zm-8.707 4.177a2.715 2.715 0 0 0-4.086 0l-5.27 5.998a2.77 2.77 0 0 0 0 3.65l5.27 5.998a2.715 2.715 0 0 0 4.086 0l5.27-5.998a2.77 2.77 0 0 0 0-3.65z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeAdd;
