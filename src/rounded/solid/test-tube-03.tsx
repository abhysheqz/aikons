import React from "react";
const TestTube_03: React.FC<
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
        d="M7.25 2a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.824 1c.536 0 .97.438.97.977v4.267c0 1.06-.668 1.897-1.464 2.316a6.3 6.3 0 0 0-1.635 1.238c1.042.14 2.356.62 3.555 1.952 1.006 1.118 3.354 1.863 6 0q.349-.247.609-.468a6.36 6.36 0 0 0-2.69-2.722c-.795-.419-1.463-1.257-1.463-2.316V1.977c0-.54.434-.977.97-.977.537 0 .971.438.971.977v4.267c0 .183.125.428.423.585a8.31 8.31 0 0 1 4.43 7.364c0 4.588-3.694 8.307-8.25 8.307S4 18.78 4 14.193c0-3.201 1.8-5.978 4.43-7.364.298-.157.423-.402.423-.585V1.977c0-.54.434-.977.97-.977m-.54 17.011a1 1 0 0 1 .704-1.224l.009-.003a1 1 0 0 1 .515 1.932l-.009.002a.995.995 0 0 1-1.219-.707m5.704-3.224a1 1 0 0 0 .515 1.931l.009-.002a1 1 0 0 0-.515-1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_03;
