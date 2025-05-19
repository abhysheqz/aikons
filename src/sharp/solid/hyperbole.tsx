import React from "react";
const Hyperbole: React.FC<
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
        d="M22 13H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 2v20h-2V2zM17 3a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6zM7 21a4 4 0 0 0-4-4v-2a6 6 0 0 1 6 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hyperbole;
