import React from "react";
const Mouse_07: React.FC<
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
        d="M5 1.25a.75.75 0 0 1 .75.75c0 .414.336.75.75.75h2.552c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.625.625.749 1.469.788 2.414a.75.75 0 0 1-1.499.062c-.038-.927-.166-1.231-.35-1.415-.13-.13-.327-.237-.788-.3C10.612 4.253 9.964 4.25 9 4.25H6.5A2.25 2.25 0 0 1 4.25 2 .75.75 0 0 1 5 1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 5.25c-.78 0-1.544.066-2.28.156-2.31.285-4.095 2.2-4.275 4.464-.106 1.332-.195 2.715-.195 4.13s.09 2.799.195 4.13c.18 2.264 1.964 4.179 4.275 4.464.736.09 1.5.156 2.28.156s1.544-.066 2.28-.156c2.31-.285 4.095-2.2 4.275-4.463.106-1.332.195-2.716.195-4.131s-.09-2.799-.195-4.13c-.18-2.264-1.964-4.18-4.275-4.464A19 19 0 0 0 13 5.25M14 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_07;
