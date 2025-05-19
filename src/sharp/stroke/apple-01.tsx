import React from "react";
const Apple_01: React.FC<
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
        strokeWidth={1.5}
        d="M8 5c-2.761 0-5 3.014-5 6.028 0 3.516.5 6.028 2.5 9.042 1.52 2.036 3.55 2.547 5.714 1.12l.786-.473.786.473c2.164 1.427 4.194.916 5.714-1.12 2-3.014 2.5-5.526 2.5-9.042C21 8.014 18.761 5 16 5c-1.425 0-3.09.933-4 1.78C11.09 5.933 9.425 5 8 5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 12c0-1.633.823-3.267 2-4M12 6c0-1.333.6-4 3-4"
      />
    </svg>
  );
};
export default Apple_01;
