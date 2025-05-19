import React from "react";
const Brain_03: React.FC<
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
        d="M9.068 1.25A3.91 3.91 0 0 0 5.16 5.16 3.91 3.91 0 0 0 2.573 12 3.91 3.91 0 1 0 12 21.426 3.91 3.91 0 1 0 21.427 12 3.91 3.91 0 1 0 12 2.574 3.9 3.9 0 0 0 9.068 1.25M3.205 9.068c0 1.08.875 1.955 1.954 1.955a.977.977 0 0 1 0 1.954 1.955 1.955 0 0 0 0 3.91c1.08 0 1.955.874 1.955 1.954a1.955 1.955 0 1 0 3.909 0V5.159a1.955 1.955 0 0 0-3.91 0c0 1.08-.874 1.955-1.954 1.955s-1.954.875-1.954 1.954"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Brain_03;
