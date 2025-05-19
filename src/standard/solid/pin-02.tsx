import React from "react";
const Pin_02: React.FC<
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
        d="M10 2.25A2.75 2.75 0 0 0 7.25 5v.382c0 .663.375 1.269.967 1.565l.935.468-.767 3.835H8A2.75 2.75 0 0 0 5.25 14v2c0 .414.336.75.75.75h5v4a1 1 0 1 0 2 0v-4h5a.75.75 0 0 0 .75-.75v-2A2.75 2.75 0 0 0 16 11.25h-.385l-.767-3.835.935-.468a1.75 1.75 0 0 0 .967-1.565V5A2.75 2.75 0 0 0 14 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pin_02;
