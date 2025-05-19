import React from "react";
const Acute: React.FC<
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
        d="M7.48 12.506c2.837.481 4.998 2.476 4.998 5.48 0 .71-.12 1.39-.341 2.022"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.468 2.506 13.975 2l.995 3.004M18.997 22 21 20.01l-2.003-1.99m-5.33-15.513L3.001 19.993a.01.01 0 0 0 .008.016h17.233"
      />
    </svg>
  );
};
export default Acute;
