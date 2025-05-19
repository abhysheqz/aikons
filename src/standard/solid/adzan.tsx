import React from "react";
const Adzan: React.FC<
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
        d="M21.707 12.793a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0m-2.414 4a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M2.293 12.793a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414m2.414 4a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.51 1.45a.75.75 0 0 0-1.02 0c-.646.597-1.293.999-1.87 1.357q-.303.186-.577.367C5.81 5.118 4.743 7.12 4.75 8.934c.004.897.29 1.704.582 2.315h13.336c.293-.611.578-1.418.582-2.315.008-1.814-1.06-3.816-4.293-5.76q-.274-.181-.577-.367c-.577-.358-1.224-.76-1.87-1.358"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 12.75h12.5V21a1.75 1.75 0 0 1-1.75 1.75h-9A1.75 1.75 0 0 1 5.75 21zM13 16a1 1 0 1 0-2 0v2.601a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Adzan;
