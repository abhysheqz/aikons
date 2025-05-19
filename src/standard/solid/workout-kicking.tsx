import React from "react";
const WorkoutKicking: React.FC<
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
        d="M12.773 3.587a1 1 0 1 0-1.62-1.174L7.9 6.896l-.953 1.208-.01.014-1.471 1.933a2 2 0 0 0-.381 1.54l.29 1.738A2 2 0 0 0 7.347 15H8.95a1 1 0 1 0 0-2H7.347l-.29-1.738.88-1.157 4.03 2.907V21a1 1 0 1 0 2 0v-8.29l1.173-2.666 5.612-6.384a1 1 0 0 0-1.502-1.32l-5.093 5.793-2.993-2.328zM5.5 3.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkoutKicking;
