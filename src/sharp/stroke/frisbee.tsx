import React from "react";
const Frisbee: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m4 22 3-3M2 20l3-3M19.716 2.45c1.317 1.317-.36 5.13-3.748 8.518-3.387 3.387-7.201 5.066-8.519 3.748M19.716 2.45c-1.317-1.317-5.131.361-8.519 3.749m8.52-3.749 1.703 1.704c1.505 1.505-.02 5.472-3.408 8.86s-7.353 4.912-8.859 3.407l-1.704-1.704m0 0c-1.317-1.317.361-5.131 3.748-8.518m0 0C8.94 8.456 7.72 10.897 8.471 11.65c.753.752 3.194-.468 5.452-2.726s3.48-4.7 2.726-5.452c-.752-.753-3.193.467-5.452 2.726Z"
      />
    </svg>
  );
};
export default Frisbee;
