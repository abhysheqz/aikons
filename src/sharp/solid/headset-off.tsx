import React from "react";
const HeadsetOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM12 3.205c3.97 0 7.249 2.974 7.737 6.821A5.1 5.1 0 0 0 17 9.25h-1.75v2.464l6.5 6.5v-7.191c0-5.398-4.366-9.773-9.75-9.773a9.7 9.7 0 0 0-5.507 1.707l1.41 1.411A7.75 7.75 0 0 1 12 3.205"
      />
      <path
        fill="currentColor"
        d="M19.8 20.795H12v1.955h8.775a.976.976 0 0 0 .975-.977v-.023L19.8 19.8zM2.25 13.955h.027C2.53 16.087 4.548 17.75 7 17.75h1.75v-8.5H7c-1.02 0-1.964.287-2.737.776a7.8 7.8 0 0 1 1.749-4.014L4.627 4.627a9.75 9.75 0 0 0-2.377 6.396z"
      />
    </svg>
  );
};
export default HeadsetOff;
