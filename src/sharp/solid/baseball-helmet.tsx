import React from "react";
const BaseballHelmet: React.FC<
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
        d="M19.983 7.75c-1.676-3.485-4.837-5.5-8.578-5.5C5.79 2.25 1.25 6.832 1.25 12.474c0 3.72 2.481 7.386 5.355 9.164l.182.112h7.976c1.81 0 3.303-1.44 3.303-3.25s-1.494-3.25-3.303-3.25h-.956c.081-.504.245-.904.459-1.226.312-.47.764-.825 1.342-1.094 1.187-.55 2.791-.68 4.392-.68h.401l2.223-3.334A.75.75 0 0 0 22 7.75zm-5.476 12c.687 0 1.243-.56 1.243-1.25s-.556-1.25-1.243-1.25h-.014c-.687 0-1.243.56-1.243 1.25s.556 1.25 1.243 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BaseballHelmet;
