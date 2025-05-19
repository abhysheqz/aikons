import React from "react";
const CircleLockCheck_02: React.FC<
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
        d="M10.5 7.25a7.75 7.75 0 1 0 1.723 15.308 6.25 6.25 0 0 1 5.357-10.715A7.75 7.75 0 0 0 10.5 7.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m2.03 4.28a.75.75 0 1 0-1.06-1.06L16 17.94l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zM5 6.5a5.5 5.5 0 1 1 11 0v3a1 1 0 1 1-2 0v-3a3.5 3.5 0 1 0-7 0v3a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleLockCheck_02;
