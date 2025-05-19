import React from "react";
const Legal_01: React.FC<
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
        d="M13.33 18.665a.75.75 0 0 1 .67-.415h4a.75.75 0 0 1 .67.415l1.293 2.585H21v1.5H11v-1.5h1.036z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 10.58-2 1.637-.95-1.161 2-1.636zm-.834 6.079-2-1.091.718-1.317 2 1.09z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m4.999 7.685-.469.469-1.06-1.061L9.313 1.25l1.06 1.06-.468.47c.24.188.54.426.874.7.859.703 1.964 1.65 2.918 2.603s1.9 2.06 2.604 2.919c.273.334.51.632.7.873l.469-.469 1.06 1.061-5.843 5.844-1.06-1.061.468-.469c-.241-.189-.54-.427-.873-.7-.86-.703-1.965-1.65-2.919-2.604s-1.9-2.059-2.604-2.918a57 57 0 0 1-.7-.874M5.941 10.778 1.47 15.25a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06 0l4.472-4.471a35 35 0 0 1-1.584-1.478 35 35 0 0 1-1.477-1.583"
      />
    </svg>
  );
};
export default Legal_01;
