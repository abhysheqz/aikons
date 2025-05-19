import React from "react";
const VerticalScrollPoint: React.FC<
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
        d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M11.47 2.47a.75.75 0 0 1 1.06 0l4 4A.75.75 0 0 1 16 7.75H8a.75.75 0 0 1-.53-1.28zM8 16.25h8a.75.75 0 0 1 .53 1.28l-4 4a.75.75 0 0 1-1.06 0l-4-4A.75.75 0 0 1 8 16.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VerticalScrollPoint;
