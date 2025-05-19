import React from "react";
const HotAirBalloon: React.FC<
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
        d="M12 1.25c-4.728 0-8.75 3.343-8.75 7.683 0 2.809 1.529 5.258 3.306 6.973a12.5 12.5 0 0 0 2.807 2.054c.915.48 1.848.79 2.637.79s1.722-.31 2.637-.79a12.5 12.5 0 0 0 2.807-2.054c1.777-1.715 3.306-4.164 3.306-6.973 0-4.34-4.022-7.683-8.75-7.683m0 15.832c.923 0 3-3.541 3-8.026 0-3.39-1.343-6.138-3-6.138S9 5.666 9 9.056c0 4.485 2.077 8.026 3 8.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default HotAirBalloon;
