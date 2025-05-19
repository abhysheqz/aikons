import React from "react";
const Ds3Tool: React.FC<
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
        d="M1 6a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v8.5a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8.5a1 1 0 1 1-2 0zm9 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m7.01 4.828c-3.122-.77-6.898-.77-10.02 0-.802.198-1.41.786-1.686 1.538-.416 1.135-.89 3.033-1.05 5.593-.07 1.125.664 1.934 1.354 2.465.613.472 1.357.849 1.907 1.128l.227.115a.75.75 0 0 0 .996-.298l1.128-1.992a.25.25 0 0 1 .217-.127h3.851a.25.25 0 0 1 .215.121l1.21 2.015a.75.75 0 0 0 .985.281l.158-.08c.558-.286 1.32-.675 1.943-1.17.677-.54 1.37-1.347 1.3-2.458-.16-2.56-.632-4.458-1.05-5.593-.275-.752-.883-1.34-1.684-1.538M9.009 16a1 1 0 1 0 0-2h-.01a1 1 0 1 0 0 2zm7-1a1 1 0 0 1-1 1h-.01a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ds3Tool;
