import React from "react";
const SwipeLeft_09: React.FC<
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
        d="M10.408 2.27c-.709-.123-1.378.341-1.5 1.025L6.748 15.22a.428.428 0 0 1-.722.215l-2.228-2.26a1.504 1.504 0 0 0-2.221.123 1.47 1.47 0 0 0-.029 1.812l3.418 4.513c.787 1.04 1.144 1.507 1.568 1.868a5.27 5.27 0 0 0 2.297 1.138c.546.119 1.138.12 2.45.12h2.725c2.495 0 4.646-1.74 5.141-4.163l1.082-5.355a1.267 1.267 0 0 0-1.05-1.463c-.709-.122-1.378.342-1.5 1.026l-.1.553a.425.425 0 0 1-.838-.148l.1-.553.199-1.106a1.267 1.267 0 0 0-1.05-1.463c-.71-.122-1.378.342-1.501 1.026l-.1.553a.425.425 0 0 1-.838-.148l.3-1.66a1.267 1.267 0 0 0-1.05-1.462c-.71-.123-1.378.341-1.502 1.025l-.299 1.66a.425.425 0 0 1-.837-.148l1.294-7.19a1.267 1.267 0 0 0-1.05-1.464M21.75 3.494a1 1 0 0 1 0 2h-2.5v.594c0 .176 0 .392-.022.568v.003c-.016.127-.088.703-.653.977-.567.275-1.067-.027-1.175-.092l-.469-.34c-.376-.294-.89-.7-1.281-1.08a4.4 4.4 0 0 1-.555-.638c-.142-.205-.345-.555-.345-.986s.204-.781.345-.986c.159-.231.36-.448.555-.638.39-.38.905-.786 1.281-1.081l.469-.34c.108-.064.608-.366 1.175-.091.565.274.637.85.653.976v.004c.022.176.022.392.022.567v.583z"
      />
    </svg>
  );
};
export default SwipeLeft_09;
