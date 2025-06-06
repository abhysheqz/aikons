import React from "react";
const BulletproofVest: React.FC<
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
        d="M3 15c.001-1.873.562-4.307.843-5.41a.97.97 0 0 1 .755-.71l.416-.083A2 2 0 0 0 6.616 6.99l.242-3.142A2 2 0 0 1 8.852 2h6.296a2 2 0 0 1 1.994 1.847l.242 3.142a2 2 0 0 0 1.602 1.808l.416.083a.97.97 0 0 1 .755.71c.281 1.103.842 3.537.843 5.41 0 1.598-.32 3.515-1.212 5.496-.433.96-1.433 1.504-2.487 1.504H6.7c-1.054 0-2.054-.544-2.487-1.504C3.32 18.515 3 16.598 3 15"
      />
      <path
        fill="currentColor"
        d="M5 14.75a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0-1.5zm0-5.5H3v1.5h2zm0 4H3v1.5h2zM19 13.25a.75.75 0 0 0 0 1.5zm0 4a.75.75 0 0 0 0 1.5zm2-4h-2v1.5h2zm0 4h-2v1.5h2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 2a3 3 0 1 1-6 0"
      />
    </svg>
  );
};
export default BulletproofVest;
