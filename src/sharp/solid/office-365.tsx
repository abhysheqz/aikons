import React from "react";
const Office_365: React.FC<
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
        d="M20.75 3.514 14.494 1.25 3.25 5.513v12.974l5.251-3.003V7.521l5.5-1.493V18.47l-10.75.017 11.243 4.263 6.256-2.264z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Office_365;
