import React from "react";
const Absolute: React.FC<
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
        d="M18 3h4v18h-4M6 21H2V3h4M7.598 8.042c1.961 0 2.653-.412 4.412 3.992 1.726 4.322 2.233 3.992 4.41 3.992M17 8.043c-2.248 0-4.142 2.7-4.99 3.89-2.675 3.75-4.214 4.093-5.006 4.093"
      />
    </svg>
  );
};
export default Absolute;
