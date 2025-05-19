import React from "react";
const CallIncoming_03: React.FC<
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
        d="M17.415 3.914 15.829 5.5H21.5v2H15.83l1.586 1.586L16 10.5l-4-4 4-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.694-1.583-5.416-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallIncoming_03;
