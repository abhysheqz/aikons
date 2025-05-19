import React from "react";
const Skew: React.FC<
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
        d="M6 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16 6.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1 17.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.508 7.22-6-1.5.485-1.94 6 1.5zM8.694 6.08l-3.5 10-1.887-.66 3.5-10zm10.062 12.051-1-9.274 1.989-.214 1 9.274zm-12.881-.873 12 1.5-.248 1.984-12-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Skew;
