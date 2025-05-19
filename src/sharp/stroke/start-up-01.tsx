import React from "react";
const StartUp_01: React.FC<
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
        strokeWidth={1.5}
        d="M13.939 8c0-1.105-.893-2-1.993-2s-1.993.895-1.993 2 .892 2 1.993 2 1.992-.896 1.992-2ZM8.956 19c0 3 2.989 4 2.989 4s2.99-1 2.99-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.013 17.034C3.96 6.588 8.867 1.967 11.966 1c3.124 1.015 8.073 5.82 4.931 16.034m-9.884 0h9.884m-9.884 0H2s-.03-4.574 4.138-5.079m10.76 5.079h5.104s.124-4.24-4.131-5.079"
      />
    </svg>
  );
};
export default StartUp_01;
