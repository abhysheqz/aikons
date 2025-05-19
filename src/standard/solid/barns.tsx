import React from "react";
const Barns: React.FC<
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
        d="M13.52 1.716a2.75 2.75 0 0 0-3.058-.003L3.474 6.376A2.75 2.75 0 0 0 2.25 8.664v1.583h19.5V8.699a2.75 2.75 0 0 0-1.219-2.284zM21.75 20v-8.253H2.25V20A2.75 2.75 0 0 0 5 22.75h3.25v-7H8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5h-.25v7H19A2.75 2.75 0 0 0 21.75 20m-7.5 2.75h-4.5v-7h4.5zM13.5 7a1.5 1.5 0 0 0-3 0v.01a1.5 1.5 0 0 0 3 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Barns;
