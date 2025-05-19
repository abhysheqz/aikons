import React from "react";
const Headset: React.FC<
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
        d="M4.263 10.026C4.75 6.18 8.029 3.205 12 3.205s7.249 2.974 7.737 6.821A5.1 5.1 0 0 0 17 9.25h-1.75v8.5H17a5.1 5.1 0 0 0 2.8-.817v3.863H12v1.954h8.775a.976.976 0 0 0 .975-.977v-10.75c0-5.398-4.365-9.773-9.75-9.773s-9.75 4.375-9.75 9.773v2.932h.027C2.53 16.087 4.548 17.75 7 17.75h1.75v-8.5H7c-1.02 0-1.964.287-2.737.776"
      />
    </svg>
  );
};
export default Headset;
