import React from "react";
const VerticalResize: React.FC<
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
        d="M3 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 14a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M12 13a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1a1 1 0 0 1 .857.486l3 5a1 1 0 0 1-1.173 1.463L12 7.054l-2.684.895a1 1 0 0 1-1.173-1.463l3-5A1 1 0 0 1 12 1M8.22 16.374a1 1 0 0 1 1.096-.323l2.684.895 2.684-.895a1 1 0 0 1 1.174 1.464l-3 5a1 1 0 0 1-1.716 0l-3-5a1 1 0 0 1 .078-1.14"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VerticalResize;
