import React from "react";
const HandPointingDown_03: React.FC<
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
        d="m2.916 10.46 4.957-7.194V2a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v1.237l.959 1.199a4.75 4.75 0 0 1 1.04 2.967V11.5c.001 1.354-.985 2.48-2.31 2.708-.272.047-.498-.182-.498-.458V11.5a.45.45 0 1 0-.9 0v2.458c0 .248-.087.493-.277.652a2.74 2.74 0 0 1-1.764.64.486.486 0 0 1-.486-.486v-2.263a.45.45 0 0 0-.9 0v2.486a1.264 1.264 0 0 1-2.527 0V13.5a.45.45 0 0 0-.9 0v7.976a1.274 1.274 0 1 1-2.547 0V10.404a.45.45 0 0 0-.763-.323l-2.015 2.355a1.623 1.623 0 0 1-2.57-1.976"
      />
    </svg>
  );
};
export default HandPointingDown_03;
