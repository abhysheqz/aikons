import React from "react";
const BulbCharging: React.FC<
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
        d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14M15.613 16H8.387a1 1 0 0 0-.948 1.316l.333 1a1 1 0 0 0 .949.684h6.558a1 1 0 0 0 .949-.684l.333-1A1 1 0 0 0 15.613 16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 19-.544 1.633A2 2 0 0 1 12.559 22h-1.117a2 2 0 0 1-1.898-1.367L9 19M12 6.5 10.5 9h3L12 11.5"
      />
    </svg>
  );
};
export default BulbCharging;
