import React from "react";
const Desk_02: React.FC<
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
        d="M14 11.5h6v2h-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 15.5v-7h-2v8a1 1 0 0 0 1 1h6v-2z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M3 5.5v15h2V9.25h14V20.5h2v-15h1v-2H2v2z" />
    </svg>
  );
};
export default Desk_02;
