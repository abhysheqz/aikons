import React from "react";
const PointingLeft_03: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 5 5 2.5M2.5 5 5 7.5M2.5 5h6M12.171 8.371 14 10.505H4.25a1.75 1.75 0 1 0 0 3.5h6.25V18.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-6.93a2 2 0 0 0-.89-1.664L14.588 5.89a1.74 1.74 0 0 0-2.417 2.482"
      />
    </svg>
  );
};
export default PointingLeft_03;
