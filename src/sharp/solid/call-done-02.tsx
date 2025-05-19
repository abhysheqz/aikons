import React from "react";
const CallDone_02: React.FC<
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
        d="M22 4.851 14.946 12l-3.945-3.946 1.414-1.414 2.469 2.469 5.642-5.61z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.5 2.5H2q0 19 19 19V16l-4.5-2-3 3c-3.694-1.584-5.416-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallDone_02;
