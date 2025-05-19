import React from "react";
const Medal_05: React.FC<
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
        d="M12 13 8.5 1.998M15 12 12 1.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.22 2h7.56l3.216 8.75a.055.055 0 0 1-.034.075L12 13l-6.962-2.175a.055.055 0 0 1-.034-.074z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.88 13.046a.097.097 0 0 1 .165 0l1.63 2.493 2.728.795c.07.02.098.11.052.171l-1.81 2.404.17 2.977c.005.077-.066.134-.135.107l-2.717-1.061-2.697 1.061c-.068.027-.14-.029-.136-.106l.146-3.022-1.776-2.36c-.046-.06-.018-.15.052-.17l2.708-.796z"
      />
    </svg>
  );
};
export default Medal_05;
