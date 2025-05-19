import React from "react";
const DragLeft_04: React.FC<
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
        d="M12 3.25a2.75 2.75 0 0 0-1.417 5.108.75.75 0 1 1-.774 1.284 4.25 4.25 0 1 1 4.382 0 .75.75 0 0 1-.774-1.284A2.75 2.75 0 0 0 12 3.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.287 2.807a.75.75 0 0 1 .463.693v1.75H8.5a.75.75 0 0 1 0 1.5H5.75V8.5a.75.75 0 0 1-1.28.53l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 .817-.163"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m9.532 21.115-3.643-5.028a1.511 1.511 0 1 1 2.448-1.773l1.413 1.951a.45.45 0 0 0 .814-.264V6.015a1.282 1.282 0 1 1 2.564 0V13a.45.45 0 0 0 .9 0v-2.43c0-.124.077-.237.196-.274.058-.018.12-.036.173-.046.26-.052.668-.039.742-.036h.024c.278.003.543.077.787.18.107.045.172.15.172.266v2.83a.45.45 0 0 0 .9 0l.002-1.935a.3.3 0 0 1 .296-.3l.327-.005c.574 0 1.098.215 1.495.569.06.053.091.13.091.21V14a.45.45 0 0 0 .9 0v-1.45c0-.165.135-.301.3-.28a2.26 2.26 0 0 1 1.964 2.23v4.45c0 1.85-1.548 3.3-3.397 3.3h-7.242a2.75 2.75 0 0 1-2.226-1.135"
      />
    </svg>
  );
};
export default DragLeft_04;
