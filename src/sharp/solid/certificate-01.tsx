import React from "react";
const Certificate_01: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h16.991a.75.75 0 0 1 .75.75v8a5.75 5.75 0 0 0-7.991 7.991v4.76H3a.75.75 0 0 1-.75-.75zM6 7.5h11V6H6zm0 5h5V11H6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.25 14.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        d="M14.25 18.874v3.876l3.25-1.3 3.25 1.3v-3.876A5.23 5.23 0 0 1 17.5 20a5.23 5.23 0 0 1-3.25-1.126"
      />
    </svg>
  );
};
export default Certificate_01;
