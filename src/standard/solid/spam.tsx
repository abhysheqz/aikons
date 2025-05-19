import React from "react";
const Spam: React.FC<
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
        d="M5.275 3.77a2.75 2.75 0 0 1 2.46-1.52h8.527a2.75 2.75 0 0 1 2.46 1.52l3.5 7a2.75 2.75 0 0 1 0 2.46l-3.5 7a2.75 2.75 0 0 1-2.46 1.52H7.734a2.75 2.75 0 0 1-2.46-1.52l-3.5-7a2.75 2.75 0 0 1 0-2.46zM11 15.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m2-7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spam;
