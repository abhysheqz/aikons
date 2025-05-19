import React from "react";
const Bathtub_02: React.FC<
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
        d="M21 15.5v-3h1v-2h-8.697l-3-2H2v2h1v5a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 21.5v-3h-2v3zm-12 0v-3H5v3zM8 5a2.5 2.5 0 0 0-5 0v4.5h2V5a.5.5 0 0 1 1 0v.5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bathtub_02;
