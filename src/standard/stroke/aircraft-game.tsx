import React from "react";
const AircraftGame: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.415 15.483c-.141-2.172-.885-3.4-1.49-4.012C3.29 12.113 2 14 2 16c0 1.5.34 2.751 1.5 4l4.5-2 .771 2.316a1 1 0 0 0 .95.684h4.558a1 1 0 0 0 .949-.684L16 18l4.5 2c1.16-1.249 1.5-2.5 1.5-4 0-2-1.289-3.887-1.923-4.53-.606.614-1.35 1.84-1.49 4.013m-13.172 0 2.086-.983c0-6.493 2.925-9.88 4.5-11.5 1.574 1.62 4.5 5.007 4.5 11.5l2.085.983m-13.17 0c.007.123.013.32.017.517m13.153-.517c-.008.123-.014.32-.018.517M12 10v1M20 8.5v-1m0-3v-1M4 8.5v-1m0-3v-1"
      />
    </svg>
  );
};
export default AircraftGame;
