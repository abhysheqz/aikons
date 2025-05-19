import React from "react";
const HotPrice: React.FC<
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
        d="m9 18 6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.499 12.5h.009m4.983 5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 7.963 8.004 5.728c-2.329 2.576-3.927 5.46-4.003 8.261C3.894 17.988 7.37 22 12.021 22c4.302.045 8.056-3.686 7.982-8.066-.077-3.803-3.146-8.053-7.894-11.91a.1.1 0 0 0-.158.045z"
      />
    </svg>
  );
};
export default HotPrice;
