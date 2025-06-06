import React from "react";
const RenewableEnergy: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 10c.78-3.816 3.67-6.87 7.406-7.91.314-.087.47-.131.555-.038.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406.087.314.131.47.038.555-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91-.314.087-.47.131-.555.038-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406-.087-.314-.131-.47-.038-.555.094-.085.248-.022.558.102L4.5 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.613 11.665 3.499-4.492c.274-.351.787-.132.787.336v3.476c0 .28.2.508.449.508h1.702c.386 0 .592.514.337.842l-3.499 4.492c-.274.351-.787.132-.787-.336v-3.476c0-.28-.2-.508-.449-.508H8.95c-.386 0-.593-.514-.337-.842"
      />
    </svg>
  );
};
export default RenewableEnergy;
