import React from "react";
const Plaza: React.FC<
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
        d="M2 22h20M4 22V6.751c0-.624 0-.936.168-1.187.168-.25.47-.39 1.076-.67l4.5-2.076c1.46-.673 2.189-1.01 2.722-.705C13 2.417 13 3.17 13 4.675V22M20 22V11.236c0-.601 0-.902-.174-1.144-.175-.241-.488-.376-1.116-.645L13 7M7.5 9h2m-2 4h2m-2 4h2"
      />
    </svg>
  );
};
export default Plaza;
