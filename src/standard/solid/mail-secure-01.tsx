import React from "react";
const MailSecure_01: React.FC<
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
        d="M1 4.932A2.93 2.93 0 0 1 3.932 2h15.64a2.93 2.93 0 0 1 2.932 2.932v4.61a.977.977 0 1 1-1.955 0V7.217l-7.595 3.797a2.69 2.69 0 0 1-2.404 0L2.955 7.218v9.444c0 .54.437.977.977.977h7.007a.977.977 0 0 1 0 1.955H3.932A2.93 2.93 0 0 1 1 16.66z"
      />
      <path
        fill="currentColor"
        d="M17.578 12.215c.42-.23.93-.23 1.351 0a8.4 8.4 0 0 0 2.433.869 1.384 1.384 0 0 1 1.141 1.358v1.971c0 1.555-.773 2.73-1.589 3.531a8.2 8.2 0 0 1-2.131 1.479c-.337.16-.722.16-1.059 0a8.2 8.2 0 0 1-2.131-1.479c-.816-.802-1.59-1.976-1.59-3.53v-1.972c0-.687.502-1.244 1.141-1.358a8.4 8.4 0 0 0 2.434-.87"
      />
    </svg>
  );
};
export default MailSecure_01;
