import React from "react";
const Projector: React.FC<
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
        d="M15 8.75a3.25 3.25 0 1 0 3.25 3.265v-.03A3.25 3.25 0 0 0 15 8.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3.25A2.75 2.75 0 0 0 1.25 6v5.25h9.059a4.751 4.751 0 0 1 9.382 0h3.059V6A2.75 2.75 0 0 0 20 3.25zm18.75 9.5h-3.059a4.751 4.751 0 0 1-9.382 0H1.25V18A2.75 2.75 0 0 0 4 20.75h16A2.75 2.75 0 0 0 22.75 18zM6 15a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Projector;
