import React from "react";
const BbqGrill: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M15 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M9 1.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 9 1.25M9.295 14.31a.75.75 0 0 1 .394.985L8.423 18.25h2.827V15a.75.75 0 0 1 1.5 0v3.25h2.827l-1.266-2.955a.75.75 0 0 1 1.378-.59l3 7a.75.75 0 0 1-1.378.59L16.22 19.75h-3.47V22a.75.75 0 0 1-1.5 0v-2.25H7.78l-1.09 2.545a.75.75 0 1 1-1.38-.59l3-7a.75.75 0 0 1 .985-.394"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 8A.75.75 0 0 1 5 7.25h14a.75.75 0 0 1 .75.75 7.75 7.75 0 0 1-15.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 10a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BbqGrill;
