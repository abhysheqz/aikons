import React from "react";
const MultiplicationSign: React.FC<
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
        d="M13.768 12 19 6.768 17.232 5 12 10.232 6.768 5 5 6.768 10.232 12 5 17.232 6.768 19 12 13.768 17.232 19 19 17.232z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MultiplicationSign;
