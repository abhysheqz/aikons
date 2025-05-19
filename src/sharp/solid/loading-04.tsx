import React from "react";
const Loading_04: React.FC<
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
        d="M1 10a1 1 0 0 1 1-1h12v2H3v2h11v2H2a1 1 0 0 1-1-1zM22 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-8V9z"
      />
    </svg>
  );
};
export default Loading_04;
