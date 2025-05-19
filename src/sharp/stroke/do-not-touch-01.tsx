import React from "react";
const DoNotTouch_01: React.FC<
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
        strokeWidth={1.5}
        d="m2 2 20 20M14.251 5.5a1.5 1.5 0 1 1 3 0v2m-3-2v-2a1.5 1.5 0 0 0-3 0V5m3 .5V11m-3-6a1.5 1.5 0 0 0-3 0v.068m3-.068v3.068m7 13.932v-2.604l.522-.625M8.25 22v-2.5l-4.163-5.451a1.696 1.696 0 0 1 .033-2.072 1.683 1.683 0 0 1 2.51-.14l1.62 1.625V8.25m9 3.751V7.5m0 0a1.5 1.5 0 1 1 3 0v8.05c0 .446-.075.885-.217 1.3"
      />
    </svg>
  );
};
export default DoNotTouch_01;
