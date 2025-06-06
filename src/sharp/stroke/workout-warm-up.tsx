import React from "react";
const WorkoutWarmUp: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19 21l-.456-3.47c-.254-1.928-.38-2.892-1.053-3.4-.672-.509-1.619-.357-3.513-.054l-1.478.237M19 9l-5.022-.59m0 0L10.5 8l-1.091 3.904c-.386 1.368-.579 2.053-.217 2.467.361.414 1.054.303 2.44.08l.868-.138m1.478-5.904L12.5 14.313M10 17l-.553 1.106a3 3 0 0 1-1.341 1.341L5 21"
      />
    </svg>
  );
};
export default WorkoutWarmUp;
