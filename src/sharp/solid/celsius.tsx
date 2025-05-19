import React from "react";
const Celsius: React.FC<
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
        d="M5 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0M10 3h11a1 1 0 0 1 1 1v3h-2V5h-8v14h8v-2h2v3a1 1 0 0 1-1 1H10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Celsius;
