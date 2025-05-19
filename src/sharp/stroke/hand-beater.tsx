import React from "react";
const HandBeater: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.489 19.467A3.493 3.493 0 0 0 2.5 17.022l4.94 4.94a3.48 3.48 0 0 0 1.049-2.495M7.49 16.972l3.993-3.993"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 9.5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m22.469 5.881-2.283-2.248-1.634-1.643a.102.102 0 0 0-.157.02c-1.917 3.077-3.724 3.093-5.087 4.457-.855.883-2.625 3.178-2.837 4.936a.1.1 0 0 0 .028.08l1.159 1.153 1.317 1.297c.02.021.05.032.08.028 1.757-.21 4.053-1.981 4.936-2.836 1.365-1.363 1.38-3.17 4.458-5.086a.102.102 0 0 0 .02-.158Z"
      />
    </svg>
  );
};
export default HandBeater;
