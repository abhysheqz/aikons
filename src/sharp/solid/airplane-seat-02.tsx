import React from "react";
const AirplaneSeat_02: React.FC<
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
        d="M2.25 17.5V8.75a1 1 0 0 1 1-1h1.5v9.75a1.25 1.25 0 1 1-2.5 0M6.25 19.75v-12h11.5v12a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2M19.25 17.5V7.75h1.5a1 1 0 0 1 1 1v8.75a1.25 1.25 0 1 1-2.5 0M20.056 6.25H3.944c.85-2.379 3.111-4 5.68-4h4.753a6.03 6.03 0 0 1 5.679 4"
      />
    </svg>
  );
};
export default AirplaneSeat_02;
