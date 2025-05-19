import React from "react";
const PrayerRug_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.5 7h12v14h-16a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2h4V4h-4a2 2 0 0 0-2 2z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.5 16.357h.331c.29 0 .435 0 .557.029.122.028.355.145.82.377 1.602.802 2.671-.6 3.596-1.736.464-.57.696-1.027.696-1.027s-.232-.457-.696-1.027c-.925-1.136-1.994-2.539-3.596-1.736-.465.232-.698.349-.82.377-.122.03-.267.03-.557.03H11.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 16h2M20.5 20h2M20.5 12h2M20.5 8h2"
      />
    </svg>
  );
};
export default PrayerRug_01;
