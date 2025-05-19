import React from "react";
const Towels: React.FC<
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
        d="M3 4a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h3v6a2 2 0 0 0 2 2h7v2H6v-8a1 1 0 1 0-2 0v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a2 2 0 0 0 2-2V9a3 3 0 0 0 3-3V4a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1 3 3 0 0 0-3-3H6.5A2.5 2.5 0 0 0 4 6.5V7a1 1 0 0 1-1-1zm4 2.5V7H6v-.5a.5.5 0 0 1 1 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Towels;
