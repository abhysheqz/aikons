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
        d="M7.75 19c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 7.75 21z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c-4.728 0-8.75 3.343-8.75 7.683 0 2.809 1.529 5.258 3.306 6.973a12.5 12.5 0 0 0 2.807 2.054c.915.48 1.848.79 2.637.79s1.722-.31 2.637-.79a12.5 12.5 0 0 0 2.807-2.054c1.777-1.715 3.306-4.164 3.306-6.973 0-4.34-4.022-7.683-8.75-7.683M12 18c.923 0 3-4 3-9.067C15 5.104 13.657 2 12 2S9 5.104 9 8.933C9 14 11.077 18 12 18"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotAirBalloon;
