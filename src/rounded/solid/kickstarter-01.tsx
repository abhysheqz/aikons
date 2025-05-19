import React from "react";
const Kickstarter_01: React.FC<
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
        d="M3.25 5.7c0-1.978 1.755-3.45 3.75-3.45s3.75 1.472 3.75 3.45v2.104l3.2-4.113c1.2-1.543 3.506-1.886 5.17-.837 1.707 1.076 2.17 3.26.93 4.855L16.71 12l3.34 4.29c1.24 1.595.777 3.78-.93 4.856-1.664 1.049-3.97.706-5.17-.837l-3.2-4.113V18.3c0 1.978-1.755 3.45-3.75 3.45s-3.75-1.472-3.75-3.45z"
      />
    </svg>
  );
};
export default Kickstarter_01;
