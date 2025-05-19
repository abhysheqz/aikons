import React from "react";
const CardExchange_02: React.FC<
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
        d="M3 9.995C3 6.99 4.499 4.987 7.994 4.987V6.99M20.974 14.002c0 3.004-1.498 5.007-4.992 5.007v-2.003M11.014 5.49v4.984q.001.009.01.01H21.99a.01.01 0 0 0 .01-.01V5.489m-10.985 0V2.011a.01.01 0 0 1 .01-.01H21.99a.01.01 0 0 1 .01.01v3.478m-10.985 0H22M2.002 17.005v4.985q0 .009.01.01h10.964a.01.01 0 0 0 .01-.01v-4.985m-10.984 0v-3.479a.01.01 0 0 1 .01-.01h10.964a.01.01 0 0 1 .01.01v3.479m-10.984 0h10.984"
      />
    </svg>
  );
};
export default CardExchange_02;
