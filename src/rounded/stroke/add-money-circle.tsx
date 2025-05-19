import React from "react";
const AddMoneyCircle: React.FC<
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
        d="M11 9.5h1.5A1.5 1.5 0 0 1 14 11m-3-1.5H9.5A1.5 1.5 0 0 0 8 11v.5A1.5 1.5 0 0 0 9.5 13h3a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H11m0-7V8m0 8.5H9.5A1.5 1.5 0 0 1 8 15m3 1.5V18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.055A9 9 0 1 0 19.945 12M18.5 2v7M22 5.5h-7"
      />
    </svg>
  );
};
export default AddMoneyCircle;
