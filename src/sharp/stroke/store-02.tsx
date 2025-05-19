import React from "react";
const Store_02: React.FC<
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
        d="M2.999 10.504v10.997h18V10.504"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.999 18.002h5M9.136 10.27c-1.199 1.308-2.882 1.307-3.857 1.132-1.506-.27-2.646-1.465-3.278-2.374a.01.01 0 0 1-.002-.009l2.05-6.52h15.905L22 8.998l-.001.008c-.878 1.315-3.333 3.814-6.783 1.65l-.488-.221m-5.592-.165c.519-.566.947-1.377 1.188-2.524M9.136 10.27c.591.666 2.234 1.76 4.269.961.552-.217.983-.489 1.323-.796m0 0c.855-.775 1.135-1.775 1.339-2.69"
      />
    </svg>
  );
};
export default Store_02;
