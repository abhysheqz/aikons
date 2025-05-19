import React from "react";
const Octagon: React.FC<
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
        d="M7.69 1.25h8.62l6.44 6.44v8.62l-6.44 6.44H7.69l-6.44-6.44V7.69z"
      />
    </svg>
  );
};
export default Octagon;
