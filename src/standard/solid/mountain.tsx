import React from "react";
const Mountain: React.FC<
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
        d="M6.404 5.097c.86-2.463 4.333-2.463 5.192 0l.781 2.24c-.7.305-1.325.818-1.776 1.538L4.305 18.94a2 2 0 0 0-.16 1.811H2a.75.75 0 0 1-.708-.997zm9.935 4.441c-1.075-1.717-3.603-1.717-4.678 0L5.364 19.602A.75.75 0 0 0 6 20.75h16a.75.75 0 0 0 .636-1.148z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mountain;
