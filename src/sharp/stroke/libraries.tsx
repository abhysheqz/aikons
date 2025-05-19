import React from "react";
const Libraries: React.FC<
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
        strokeWidth={1.5}
        d="M7 4H2v16h5zM12 7H7v13h5zM17.896 7l-4.699 1.712L17.302 20 22 18.288z"
      />
    </svg>
  );
};
export default Libraries;
