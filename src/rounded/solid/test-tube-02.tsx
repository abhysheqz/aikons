import React from "react";
const TestTube_02: React.FC<
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
        d="M6 2.25a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.2 1.25c.525 0 .95.438.95.977v5.774c.793.03 1.767.622 2.85 1.317 1.216.78 2.166.806 2.85.5v-7.59c0-.54.425-.978.95-.978s.95.438.95.977v15.637c0 2.698-2.127 4.886-4.75 4.886s-4.75-2.188-4.75-4.886V2.227c0-.54.425-.977.95-.977m1.834 17.011a1 1 0 0 1 .704-1.224l.009-.003a1 1 0 0 1 .515 1.932l-.009.002a.995.995 0 0 1-1.219-.707m2.704-5.224a1 1 0 0 0 .515 1.931l.009-.002a1 1 0 0 0-.515-1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_02;
