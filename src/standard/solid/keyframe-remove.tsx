import React from "react";
const KeyframeRemove: React.FC<
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
        d="M16 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-4.707 2.177a2.715 2.715 0 0 0-4.086 0l-5.27 5.998a2.77 2.77 0 0 0 0 3.65l5.27 5.998a2.715 2.715 0 0 0 4.086 0l5.27-5.998a2.77 2.77 0 0 0 0-3.65z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeRemove;
