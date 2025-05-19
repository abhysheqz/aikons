import React from "react";
const Dirham: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M15.2 8.432a.75.75 0 0 1 1.058.078l1.47 1.703c1.242 1.437.138 3.536-1.68 3.537H15a.75.75 0 1 1 0-1.5h1.048c.64 0 .878-.671.545-1.057l-1.47-1.703a.75.75 0 0 1 .077-1.058M9.75 8a.75.75 0 0 0-1.5 0v4.998a.75.75 0 1 0 1.5 0zm.13 8.749H11a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h.328c-.082-.581.083-1.222.642-1.78.573-.574 1.265-.551 1.711-.431.158.044.532.177.761.356a.75.75 0 0 1-.878 1.216c-.274-.2-.47-.137-.534-.08-.24.211-.2.567-.15.719M13 13a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dirham;
