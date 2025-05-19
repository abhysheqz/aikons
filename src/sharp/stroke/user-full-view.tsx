import React from "react";
const UserFullView: React.FC<
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
      <circle
        cx={12}
        cy={5}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.587 9c1.61 1.286 3.38 4.333 1.794 7.222h-2.114L13.534 22h-3.078l-1.719-5.778H6.625c-1.589-2.889.17-5.936 1.78-7.222"
      />
    </svg>
  );
};
export default UserFullView;
