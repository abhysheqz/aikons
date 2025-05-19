import React from "react";
const BloodType: React.FC<
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
        d="M12 2s8.5 5 8.5 11.5a8.5 8.5 0 0 1-17 0C3.5 7 12 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M10.088 13.297h3.838m-4.95 2.725 3.056-7.489 2.975 7.481"
      />
    </svg>
  );
};
export default BloodType;
