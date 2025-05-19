import React from "react";
const Car_05: React.FC<
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
        d="m2.45 7.9 1.229.921 1.616-3.879A2.75 2.75 0 0 1 7.833 3.25h8.334a2.75 2.75 0 0 1 2.538 1.692l1.616 3.88L21.55 7.9a.75.75 0 0 1 .9 1.2l-1.432 1.074 1.27 1.906c.301.452.462.983.462 1.526V20a.75.75 0 0 1-.75.75h-2.25A.75.75 0 0 1 19 20v-2.25H5V20a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6.394c0-.543.16-1.074.462-1.526l1.27-1.906L1.55 9.1a.75.75 0 1 1 .9-1.2m5.383-3.15c-.505 0-.96.303-1.154.77L5.027 9.483l1.065.266h11.815l1.065-.266-1.652-3.965a1.25 1.25 0 0 0-1.154-.769zM18 13a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V14a1 1 0 0 1 1-1M7 14a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Car_05;
