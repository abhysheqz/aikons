import React from "react";
const Building_03: React.FC<
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
        d="m16 9.945 5 1.986v9.93"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8.952h5m-5 3.972h5M12 21.86v-4.965H7v4.965M1 21.86h22"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.989 21.998V2.013A.01.01 0 0 1 3 2.002l12.97 3.33v16.565"
      />
    </svg>
  );
};
export default Building_03;
