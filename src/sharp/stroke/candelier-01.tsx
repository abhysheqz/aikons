import React from "react";
const Candelier_01: React.FC<
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
        d="M8.984 2.999h6M11.997 2.999v13.978M4.988 11.985v-1.248c0-2.068 1.569-3.744 3.505-3.744s3.504 1.676 3.504 3.744c0-2.068 1.57-3.744 3.505-3.744s3.504 1.676 3.504 3.744v1.248"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2.006 15.862 1.491-3.888h3.02l1.462 3.889a.1.1 0 0 1-.094.135H2.1a.1.1 0 0 1-.094-.136ZM16.021 15.863l1.49-3.888h3.021l1.462 3.888a.1.1 0 0 1-.094.135h-5.785a.1.1 0 0 1-.094-.135ZM9.045 20.866l1.491-3.889h3.02l1.462 3.89a.1.1 0 0 1-.094.134H9.14a.1.1 0 0 1-.094-.136Z"
      />
    </svg>
  );
};
export default Candelier_01;
