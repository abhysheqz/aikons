import React from "react";
const Location_08: React.FC<
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
        strokeWidth={1.5}
        d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2C8.134 2 5 5.075 5 8.869c0 2.169.875 3.855 2.625 5.362C8.858 15.293 11.103 17.57 12 19c.943-1.401 3.142-3.707 4.375-4.77C18.125 12.725 19 11.039 19 8.87 19 5.075 15.866 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 17 2 5H4l2-5"
      />
    </svg>
  );
};
export default Location_08;
