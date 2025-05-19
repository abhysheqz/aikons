import React from "react";
const Edit_01: React.FC<
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
        d="M18.5 1.25a.75.75 0 0 1 .53.22l3.5 3.5a.75.75 0 0 1 0 1.06l-9.72 9.72H8.25v-4.56l9.72-9.72a.75.75 0 0 1 .53-.22"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 16.75a2.5 2.5 0 0 1 2.5-2.5H6v1.5H3.75a1 1 0 1 0 0 2h9.5a2.5 2.5 0 0 1 0 5H11v-1.5h2.25a1 1 0 1 0 0-2h-9.5a2.5 2.5 0 0 1-2.5-2.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Edit_01;
