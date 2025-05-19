import React from "react";
const Microwave: React.FC<
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
        d="M1.25 3.375a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm14.75 3H5v9h11zm4 2.009V6.375h-2v2.009zm0 2.996V9.37h-2v2.01zm0 2.995v-2.009h-2v2.009z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 21.375v-3h2v3zm14 0v-3h2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Microwave;
