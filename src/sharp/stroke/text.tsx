import React from "react";
const Text: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 21H9M19 6V3H4.998L5 6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12.027 3.705V21" />
    </svg>
  );
};
export default Text;
