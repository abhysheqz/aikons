import React from "react";
const Crazy: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M7.75 9.5a.75.75 0 0 0-1.5 0 2.25 2.25 0 0 0 4.5 0 .75.75 0 0 0-1.5 0 .75.75 0 0 1-1.5 0m7.36-1.286c-.209.418-.36 1.049-.36 1.786a.75.75 0 0 1-1.5 0c0-.92.185-1.79.518-2.457.312-.622.88-1.293 1.732-1.293.851 0 1.42.67 1.732 1.293.333.668.518 1.537.518 2.457a.75.75 0 0 1-1.5 0c0-.737-.151-1.368-.36-1.786a1.3 1.3 0 0 0-.29-.406.3.3 0 0 0-.096-.058h-.008l-.014.005a.3.3 0 0 0-.082.053c-.08.069-.185.197-.29.406m2.126 4.84a.75.75 0 0 0-1.206.892c.304.41.31.952-.092 1.325-.456.423-.963.442-1.612.27a9 9 0 0 1-.828-.28l-.176-.066c-.306-.113-.712-.26-1.09-.274-.672-.024-1.201.283-1.614.522l-.098.056c-.455.262-.976.546-1.812.722-.4.085-.632-.008-.751-.1a.55.55 0 0 1-.207-.45.75.75 0 0 0-1.5 0c0 .63.273 1.238.79 1.638.524.404 1.223.54 1.977.38 1.064-.224 1.744-.599 2.25-.888.534-.307.697-.389.913-.381.094.003.27.052.621.182l.152.056c.283.107.63.237.988.332.872.232 2.015.31 3.017-.619 1.074-.996.94-2.422.278-3.317"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crazy;
