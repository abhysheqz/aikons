import React from "react";
const InequalityCircle_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m2.64 6.518L10.762 11h5.237v2H8a1 1 0 0 1-.64-1.769l6-5zM7.06 17H16v-2H7.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InequalityCircle_01;
