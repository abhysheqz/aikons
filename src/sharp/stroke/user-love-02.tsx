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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0M19 14.5s3-1.323 3-3.472c0-.844-.632-1.528-1.5-1.528-1.071 0-1.443.833-1.443.833h-.114S18.571 9.5 17.5 9.5c-.868 0-1.5.684-1.5 1.528 0 2.149 3 3.472 3 3.472Z"
      />
    </svg>
  );
};
export default UserLove_02;
