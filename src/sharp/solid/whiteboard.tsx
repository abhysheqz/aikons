import React from "react";
const Whiteboard: React.FC<
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
        d="M1.25 3.25h13.667v1.944H3.202v4.53l.786-.756a3.107 3.107 0 0 1 4.286 0 2.91 2.91 0 0 1 0 4.217.97.97 0 0 0 0 1.421 1.15 1.15 0 0 0 1.571 0l.489-.47 1.356 1.398-.488.47a3.107 3.107 0 0 1-4.285 0 2.91 2.91 0 0 1 0-4.217.97.97 0 0 0 0-1.42 1.15 1.15 0 0 0-1.572 0l-2.143 2.062v6.377h16.596V12h1.952v8.75H1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m19.19 3.25 3.56 3.56-7.25 7.25h-3.56V10.5z"
      />
    </svg>
  );
};
export default Whiteboard;
