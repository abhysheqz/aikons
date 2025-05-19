import React from "react";
const Centralized: React.FC<
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
        d="M16 6a1 1 0 0 0 1 1h3.5a1 1 0 1 0 0-2h-1.086l2.293-2.293a1 1 0 0 0-1.414-1.414L18 3.586V2.5a1 1 0 1 0-2 0zM5.75 11.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M16 17a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2h-1.086l2.293 2.293a1 1 0 0 1-1.414 1.414L18 19.414V20.5a1 1 0 1 1-2 0zM6 16a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-1.086l-2.293 2.293a1 1 0 0 1-1.414-1.414L3.586 18H2.5a1 1 0 1 1 0-2zm0-9a1 1 0 0 0 1-1V2.5a1 1 0 0 0-2 0v1.086L2.707 1.293a1 1 0 0 0-1.414 1.414L3.586 5H2.5a1 1 0 0 0 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Centralized;
