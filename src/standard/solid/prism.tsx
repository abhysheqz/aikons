import React from "react";
const Prism: React.FC<
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
        d="M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 21.5zm2 1v9.796l6-5.25V12a1 1 0 1 1 2 0v2.546l6 5.25V10z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 1.547 3.342 8.248A1 1 0 0 0 4 10.001h16a1 1 0 0 0 .659-1.753L13 1.547V6a1 1 0 0 1-2 0z"
      />
    </svg>
  );
};
export default Prism;
