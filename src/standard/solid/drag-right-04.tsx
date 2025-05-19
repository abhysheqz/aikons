import React from "react";
const DragRight_04: React.FC<
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
        d="m7.383 21.115-3.642-5.028a1.511 1.511 0 1 1 2.448-1.773L7.6 16.265a.45.45 0 0 0 .815-.264V6.015a1.282 1.282 0 1 1 2.564 0V13a.45.45 0 0 0 .9 0v-2.43c0-.124.077-.237.196-.274.058-.018.12-.036.173-.046.26-.052.667-.039.742-.036h.023c.279.003.543.077.788.18.106.045.172.15.172.266v2.83a.45.45 0 0 0 .9 0l.002-1.935a.3.3 0 0 1 .295-.3l.328-.005c.574 0 1.097.215 1.495.569.06.053.09.13.09.21V14a.45.45 0 1 0 .9 0v-1.45c0-.165.136-.301.3-.28a2.26 2.26 0 0 1 1.965 2.23v4.45c0 1.85-1.548 3.3-3.397 3.3H9.61a2.75 2.75 0 0 1-2.227-1.135"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 6a4.25 4.25 0 1 1 6.44 3.642.75.75 0 0 1-.773-1.284 2.75 2.75 0 1 0-2.833 0 .75.75 0 1 1-.775 1.284A4.25 4.25 0 0 1 5.75 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.713 2.807a.75.75 0 0 1 .817.163l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.28-.53V6.75H13.5a.75.75 0 0 1 0-1.5h2.75V3.5a.75.75 0 0 1 .463-.693"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DragRight_04;
