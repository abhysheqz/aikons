import React from "react";
const Xls_02: React.FC<
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
        d="m10.53 13.248 1.499.001-1.654 3.251 1.654 3.25h-1.498L9.5 17.958l-.987 1.792H6.97l1.654-3.25-1.654-3.25h1.542l.987 1.792zM16.25 18.25v1.5h-3.5v-6.5h1.5v5zM21.25 13.25v1.5h-2.5v1h2.5v4h-4v-1.5h2.5v-1h-2.5v-4z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.751 1.25-.001 21.5h17.5V21H4.932l2.291-4.5-2.29-4.502L20.25 12V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Xls_02;
