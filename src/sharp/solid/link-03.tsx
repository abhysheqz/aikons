import React from "react";
const Link_03: React.FC<
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
        d="m16.707 8.706-7.998 8-1.415-1.414 7.999-8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.793 1.293a1 1 0 0 1 1.414 0l5.5 5.5a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-1.375-1.375 1.414-1.414.668.668L20.586 7.5 16.5 3.414 12.414 7.5l.668.668-1.414 1.414-1.375-1.375a1 1 0 0 1 0-1.414zM6.793 10.293a1 1 0 0 1 1.414 0l1.375 1.375-1.414 1.414-.668-.668L3.414 16.5 7.5 20.586l4.086-4.086-.668-.668 1.414-1.414 1.375 1.375a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-5.5-5.5a1 1 0 0 1 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_03;
