import React from "react";
const CallIncoming_04: React.FC<
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
        d="m21.5 3.913-4.581 4.58h2.583v1.999h-4.58l-.01.008-.008-.008h-1.396V9.096l-.008-.009.008-.008V4.498h1.998v2.583L20.087 2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.694-1.583-5.417-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallIncoming_04;
