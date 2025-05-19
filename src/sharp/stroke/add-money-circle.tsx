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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 4.055A9 9 0 1 0 19.945 12M18.5 2v7M22 5.5h-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 9.5h-3m0 0H8V13h6v3.5h-3m0-7V8m0 8.5H8m3 0V18"
      />
    </svg>
  );
};
export default AddMoneyCircle;
