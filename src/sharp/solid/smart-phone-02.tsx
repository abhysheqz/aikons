import React from "react";
const SmartPhone_02: React.FC<
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
        d="M19.25 1.25H4.75v21.5h14.5zM17.317 19H6.683V3.203H9.47l.484.977h4.094l.484-.977h2.786z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SmartPhone_02;
