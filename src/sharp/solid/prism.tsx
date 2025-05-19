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
        d="M5 8.75v10.796l6-5.25V11.75h2v2.546l6 5.25V8.75h2v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-13z"
      />
      <path
        fill="currentColor"
        d="M11 1.25v5.5h2v-5.5l7.658 6.747A1 1 0 0 1 20 9.75H4a1 1 0 0 1-.659-1.753z"
      />
    </svg>
  );
};
export default Prism;
