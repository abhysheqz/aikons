import React from "react";
const AppleStocks: React.FC<
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
        d="M14.25 5.5V2.25H3a.75.75 0 0 0-.75.75v10.75h1.39l1.774-2.219a.75.75 0 0 1 1.23.083l.744 1.242.923-2.151a.75.75 0 0 1 1.36-.04l1.829 3.658 2.122-4.244A1.75 1.75 0 1 1 16.436 10l.728 1.274.806-.805a.75.75 0 0 1 1.154.114l1.777 2.666h.849V3a.75.75 0 0 0-.75-.75h-5.25V5.5z"
      />
      <path
        fill="currentColor"
        d="M21.75 14.75H20.5a.75.75 0 0 1-.624-.334l-1.493-2.239-.853.853a.75.75 0 0 1-1.181-.158l-1.216-2.127a2 2 0 0 1-.17.005l-2.792 5.585a.75.75 0 0 1-1.342 0l-1.777-3.553-.863 2.013a.75.75 0 0 1-1.332.09l-.945-1.574-1.326 1.658A.75.75 0 0 1 4 15.25H2.25V21c0 .414.336.75.75.75h11.25V14.5h1.5v7.25H21a.75.75 0 0 0 .75-.75z"
      />
    </svg>
  );
};
export default AppleStocks;
