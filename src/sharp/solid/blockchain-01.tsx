import React from "react";
const Blockchain_01: React.FC<
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
        d="M11.632 2.346a.75.75 0 0 1 .736 0l8 4.5a.75.75 0 0 1 0 1.308l-8 4.5a.75.75 0 0 1-.736 0l-8-4.5a.75.75 0 0 1 0-1.308z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.194 15.834V7.652H3.25v8.75c0 .352.19.675.495.848l7.778 4.375a.97.97 0 0 0 .953 0l7.778-4.375a.97.97 0 0 0 .496-.848v-8.75h-1.945v8.182l-5.833 3.281v-7.088h-1.944v7.088z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blockchain_01;
