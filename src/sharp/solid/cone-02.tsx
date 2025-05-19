import React from "react";
const Cone_02: React.FC<
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
        d="M13.336 17.425a1.875 1.875 0 1 0 .298 2.263H12.01v-1.875h1.624a2 2 0 0 0-.298-.388m-3.978-1.326a3.75 3.75 0 1 1 5.304 5.303 3.75 3.75 0 0 1-5.304-5.303"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 1.5v4.25h2V1.5l9.43 6.636a.75.75 0 0 1 .271.88 11.7 11.7 0 0 1-2.576 4.036 11.3 11.3 0 0 1-16.25 0 11.7 11.7 0 0 1-2.576-4.035.75.75 0 0 1 .27-.881zm0 10.25a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m1-4a1 1 0 0 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cone_02;
