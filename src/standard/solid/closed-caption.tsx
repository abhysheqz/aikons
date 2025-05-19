import React from "react";
const ClosedCaption: React.FC<
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
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v14A2.75 2.75 0 0 0 4 21.75h16A2.75 2.75 0 0 0 22.75 19V5A2.75 2.75 0 0 0 20 2.25zM8 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.5a1 1 0 1 0 0-2H8v-4h2.5a1 1 0 1 0 0-2zm6.5 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2H17a1 1 0 1 0 0-2h-2.5v-4H17a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ClosedCaption;
