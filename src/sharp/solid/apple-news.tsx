import React from "react";
const AppleNews: React.FC<
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
        d="M11.69 1.75h10.56v10.56zM12.312 22.25H1.75V11.69zM1.75 1.75h7.06l13.44 13.44v7.06h-7.06L1.75 8.81z"
      />
    </svg>
  );
};
export default AppleNews;
