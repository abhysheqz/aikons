import React from "react";
const MasterCard: React.FC<
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
        d="M2 3.25a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75zM8 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 2 7.465 4 4 0 1 0 0-6.93A4 4 0 0 0 10 8m4 6q-.26 0-.5-.063c.319-.574.5-1.234.5-1.937s-.181-1.363-.5-1.937Q13.74 10 14 10a2 2 0 0 1 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MasterCard;
