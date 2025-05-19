import React from "react";
const CursorDisabled_01: React.FC<
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
        d="M12.172 8.828a4 4 0 0 0 5.656-5.656m-5.656 5.656a4 4 0 0 1 5.656-5.656m-5.656 5.656 5.656-5.656"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.027 4.155-2.29-2.027a.508.508 0 0 0-.844.35l-.892 16.435c-.025.45.51.704.846.403l3.619-3.232a.51.51 0 0 1 .81.187l2.196 5.413c.105.259.401.384.661.28l1.878-.756c.26-.105.386-.4.28-.658l-2.222-5.477a.505.505 0 0 1 .403-.69l5.087-.676a.505.505 0 0 0 .27-.879l-1.27-1.124"
      />
    </svg>
  );
};
export default CursorDisabled_01;
