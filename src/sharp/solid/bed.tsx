import React from "react";
const Bed: React.FC<
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
        d="M1.5 20.5v-17h2v17zM20.5 20.5v-12h2v12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.5 12h-20v-2h20zM5.5 17h-4v-2h4zm16 0h-3v-2h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.5 19v-8h15v8a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 8.5H4.5v-2H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bed;
