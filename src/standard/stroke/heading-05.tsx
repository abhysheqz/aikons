import React from "react";
const Heading_05: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12h9m-9 7V5m9 14V5M19.5 11H16v3h1.5a2.51 2.51 0 0 1 2.5 2.513C20 17.879 18.867 19 17.5 19c-1 0-1.5-.5-1.5-.5"
      />
    </svg>
  );
};
export default Heading_05;
