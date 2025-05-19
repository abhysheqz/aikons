import React from "react";
const TwoFinger_01: React.FC<
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
        d="M11.125 5.364c0-.547-.22-1.102-.736-1.28A1.4 1.4 0 0 0 9.999 4a1.5 1.5 0 0 0-1.5 1.5l.001 8-2.132-2.081a1.736 1.736 0 0 0-2.487.234 1.74 1.74 0 0 0 .008 2.183L8.5 20.5v1.244a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V20.5l1.123-1.404a4 4 0 0 0 .877-2.5V12.5a2 2 0 0 0-2-2h-.845c.141.304.22.643.22 1v1a.375.375 0 0 1-.75 0v-1c0-.898-.727-1.625-1.625-1.625h-.625V11.5a.375.375 0 0 1-.75 0V3.125a1.125 1.125 0 0 0-2.25 0V11.5a.375.375 0 0 1-.75 0z"
      />
    </svg>
  );
};
export default TwoFinger_01;
