import React from "react";
const UserLove_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0M19 14.5s3-1.323 3-3.472c0-.844-.632-1.528-1.5-1.528-.71 0-1.184.294-1.5.882-.316-.588-.79-.882-1.5-.882-.868 0-1.5.684-1.5 1.528 0 2.149 3 3.472 3 3.472"
      />
    </svg>
  );
};
export default UserLove_02;
