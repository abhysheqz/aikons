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
        d="M9.068 1.25A3.91 3.91 0 0 0 5.16 5.16 3.91 3.91 0 0 0 2.573 12 3.91 3.91 0 1 0 12 21.427 3.91 3.91 0 1 0 21.427 12 3.91 3.91 0 1 0 12 2.573 3.9 3.9 0 0 0 9.068 1.25m1.955 3.907a1.954 1.954 0 0 0-3.91.002v1.955H5.16a1.955 1.955 0 0 0 0 3.909v1.954a1.955 1.955 0 0 0 0 3.91h1.955v1.954a1.955 1.955 0 1 0 3.909 0V5.157"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Brain_03;
