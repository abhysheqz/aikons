import React from "react";
const MoveLeft: React.FC<
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
        d="M4.43 8.012a.75.75 0 0 1 .641-.259c.291.028.417.346.417.638V11h6.27a1 1 0 1 1 0 2h-6.27v2.61c0 .291-.126.61-.417.637a.75.75 0 0 1-.64-.259l-3-3.5a.75.75 0 0 1 0-.976zM15.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveLeft;
