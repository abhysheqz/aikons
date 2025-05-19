import React from "react";
const InequalityCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M9.36 7.768 13.238 11H8.001v2H16a1 1 0 0 0 .64-1.769l-6-5zM16.94 17H8v-2h8.94z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InequalityCircle_02;
