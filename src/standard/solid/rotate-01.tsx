import React from "react";
const Rotate_01: React.FC<
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
        d="M11.75 2.955a8.795 8.795 0 1 0 8.796 8.795.977.977 0 1 1 1.954 0c0 5.937-4.813 10.75-10.75 10.75S1 17.687 1 11.75 5.813 1 11.75 1c2.6 0 4.983.923 6.842 2.458v-.992a.977.977 0 0 1 1.954 0v3.42a.977.977 0 0 1-1.758.587 8.78 8.78 0 0 0-7.038-3.518"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rotate_01;
