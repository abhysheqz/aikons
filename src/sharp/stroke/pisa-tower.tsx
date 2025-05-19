import React from "react";
const PisaTower: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 21.5h20M16.46 16.909l1.29-5.032m-1.29 5.032 1.68.458m-1.68-.458-8.661-2.427m8.66 2.427-1.112 4.343m2.402-9.375 1.29-5.032m-1.29 5.032 1.657.354m-1.657-.354L9.09 9.45m9.95-2.605-1.925-.539m1.924.54 1.561.43M7.8 14.482l1.29-5.032m-1.29 5.032-1.858-.58m1.858.58-1.735 6.77M9.088 9.45l1.29-5.031M9.087 9.45l-1.883-.573m3.172-4.458L8.617 3.87m1.761.548 1.925.539m0 0 4.812 1.348m-4.812-1.348L13 2.5l4.75 1.37-.636 2.436M14 8.976l-.478 1.711m-.956 3.422-.386 1.38m-1.12 4.007-.478 1.712"
      />
    </svg>
  );
};
export default PisaTower;
