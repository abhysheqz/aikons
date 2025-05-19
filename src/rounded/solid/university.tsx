import React from "react";
const University: React.FC<
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
        fillRule="evenodd"
        d="M3.25 12a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1m17.5 0a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 13a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 5.732h-3.25V8a.75.75 0 0 1-1.5 0V2.936c0-.207 0-.43.025-.617.03-.22.105-.5.34-.736.4-.403.957-.348 1.234-.3.34.06.706.195 1.037.34.67.292 1.36.698 1.728.925.957.59 1.136 1.697 1.136 2.434a.75.75 0 0 1-.75.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 7.25a.75.75 0 0 0 0 1.5h.25V22c0 .414.336.75.75.75H12a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75h4.5a.75.75 0 0 0 .75-.75V8.75h.25a.75.75 0 0 0 0-1.5zm4 4a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75M11.25 16a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm3 0a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default University;
