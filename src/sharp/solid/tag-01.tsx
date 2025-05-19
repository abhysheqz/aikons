import React from "react";
const Tag_01: React.FC<
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
        d="M22 1.25a.75.75 0 0 1 .75.75v10.31L12.53 22.53a.75.75 0 0 1-1.06 0l-10-10a.75.75 0 0 1 0-1.06L11.69 1.25zM19.5 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M7.275 13.707l3 3 1.415-1.414-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tag_01;
