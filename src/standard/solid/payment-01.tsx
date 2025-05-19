import React from "react";
const Payment_01: React.FC<
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
        d="M1.25 5A2.75 2.75 0 0 1 4 2.25h16A2.75 2.75 0 0 1 22.75 5v8A2.75 2.75 0 0 1 20 15.75h-.25V17A4.75 4.75 0 0 1 15 21.75h-5A4.75 4.75 0 0 1 5.25 17v-1.25H4A2.75 2.75 0 0 1 1.25 13zm5.5 10.75V17A3.25 3.25 0 0 0 10 20.25h5A3.25 3.25 0 0 0 18.25 17V9.88A2.25 2.25 0 0 0 16.75 12v2a.75.75 0 0 1-.75.75A2.25 2.25 0 0 0 13.75 17a.75.75 0 0 1-1.5 0c0-.438.075-.86.213-1.25zm5.25-9a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Payment_01;
