import React from "react";
const Archive_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21h10c2.357 0 3.535 0 4.268-.732C22 19.535 22 18.357 22 16s0-3.536-.732-4.268C20.535 11 19.357 11 17 11H7c-2.357 0-3.535 0-4.268.732S2 13.642 2 16s0 3.535.732 4.268S4.642 21 7 21M4 11c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C5.9 7 6.6 7 8 7h8c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C20 8.9 20 9.6 20 11M6 7c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C7.9 3 8.6 3 10 3h4c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C18 4.9 18 5.6 18 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 15-.3.4c-.589.785-.883 1.178-1.306 1.389-.422.211-.913.211-1.894.211h-1c-.981 0-1.472 0-1.894-.211-.423-.211-.717-.604-1.306-1.389L8 15"
      />
    </svg>
  );
};
export default Archive_02;
