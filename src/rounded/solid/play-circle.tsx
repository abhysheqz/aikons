import React from "react";
const PlayCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.372 13.436c1.909-1.012 2.863-1.518 3.066-2.235a1.66 1.66 0 0 0 0-.902c-.203-.716-1.157-1.223-3.066-2.235-1.846-.978-2.768-1.468-3.512-1.271a1.9 1.9 0 0 0-.814.448C8.5 9.006 8.5 10.004 8.5 12s0 2.994.546 3.509c.226.212.506.367.814.448.744.197 1.666-.293 3.512-1.271"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlayCircle;
