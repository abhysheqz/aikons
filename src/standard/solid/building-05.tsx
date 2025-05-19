import React from "react";
const Building_05: React.FC<
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
        d="M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 11A2.75 2.75 0 0 1 13 8.25h6A2.75 2.75 0 0 1 21.75 11v11a.75.75 0 0 1-.75.75h-5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h-5a.75.75 0 0 1-.75-.75zm4 2a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 4A2.75 2.75 0 0 1 5 1.25h8A2.75 2.75 0 0 1 15.75 4v2.95H13A4.05 4.05 0 0 0 8.95 11v11c0 .265.05.518.142.75H3a.75.75 0 0 1-.75-.75v-7.25h3.017a.75.75 0 0 0 0-1.5H2.25v-2.5h3.017a.75.75 0 0 0 0-1.5H2.25v-2.5h3.017a.75.75 0 0 0 0-1.5H2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_05;
