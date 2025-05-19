import React from "react";
const Lighthouse: React.FC<
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
        d="M4.25 22a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 5a3.75 3.75 0 1 1 7.5 0 .75.75 0 0 1-.75.75H9A.75.75 0 0 1 8.25 5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 5A.75.75 0 0 1 8 4.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 5M21.712 5.263a.75.75 0 0 1-.475.949l-2 .666a.75.75 0 0 1-.474-1.423l2-.667a.75.75 0 0 1 .948.475m-3.424 3.333a.75.75 0 0 1 .95-.474l2 .666a.75.75 0 0 1-.475 1.423l-2-.666a.75.75 0 0 1-.475-.949M2.288 5.263a.75.75 0 0 1 .95-.475l2 .667a.75.75 0 1 1-.475 1.423l-2-.666a.75.75 0 0 1-.475-.95m3.424 3.333a.75.75 0 0 1-.475.949l-2 .666a.75.75 0 1 1-.474-1.423l2-.666a.75.75 0 0 1 .949.474M7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5A.75.75 0 0 1 9 4.25m6 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.26 9.877A.75.75 0 0 1 9 9.25h6a.75.75 0 0 1 .74.627l2 12a.75.75 0 0 1-.74.873H7a.75.75 0 0 1-.74-.873z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 6.75a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Lighthouse;
