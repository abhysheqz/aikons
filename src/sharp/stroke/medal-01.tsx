import React from "react";
const Medal_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 2-.023 8.234M16 2v8.115M16 15l-4-2-4 2v5l4 2 4-2z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.943 12 2 7.48V2.1a.1.1 0 0 1 .1-.1h19.799a.1.1 0 0 1 .1.1v5.403z"
      />
    </svg>
  );
};
export default Medal_01;
