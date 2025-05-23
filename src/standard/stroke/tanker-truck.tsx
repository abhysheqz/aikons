import React from "react";
const TankerTruck: React.FC<
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
        d="M21 17.5h1a1 1 0 0 0 1-1v-3.446a2 2 0 0 0-.285-1.029l-2.132-3.554a2 2 0 0 0-1.715-.971H16a1 1 0 0 0-1 1v9h2m5.5-5H18V10M7 17.5h8V15H1v1.5a1 1 0 0 0 1 1h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M1.733 4.984C1.277 5.923 1 7.153 1 8.5s.277 2.577.733 3.516c.15.31.476.484.82.484h8.394c.344 0 .67-.174.82-.484.456-.939.733-2.169.733-3.516s-.277-2.577-.733-3.516c-.15-.31-.476-.484-.82-.484H2.553c-.344 0-.67.174-.82.484M8.75 4.5v8m-4 0v-8"
      />
    </svg>
  );
};
export default TankerTruck;
