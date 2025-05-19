import React from "react";
const FourK: React.FC<
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
        d="M2 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm5.75 9v-3h-1.5v4.5h3.5v3h1.5v-7.5h-1.5v3zm6.5-.88V8.25h-1.5v7.5h1.5v-2.12l2.262 1.94.976-1.14L14.652 12l2.836-2.43-.976-1.14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FourK;
