import React from "react";
const BubbleChatSecure: React.FC<
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
        d="M12 1.25q.505 0 1 .044V5.47c0 2.526 1.301 4.182 2.514 5.135.595.467 1.18.78 1.615.976.155.07.43.167.601.227.1.035.77.26.77.26s.67-.225.77-.26a9 9 0 0 0 .601-.227 8 8 0 0 0 1.615-.976 7 7 0 0 0 1.072-1.045q.19.942.192 1.94c0 5.696-4.85 10.25-10.75 10.25-1.405 0-2.75-.258-3.983-.727L3.25 22.75l.911-4.236C2.361 16.686 1.25 14.22 1.25 11.5 1.25 5.804 6.1 1.25 12 1.25M8.009 11H6v2h2.009zm3.996 0h-2.01v2h2.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.5 10.75s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.003-.787-2.037-2.111-2.037-4.152V2.401H15c.878 0 1.656-.22 2.221-.446a10 10 0 0 0 .865-.429l.414-.276.414.276c.15.082.584.317.864.429A6 6 0 0 0 22 2.401h.75V5.47c0 2.04-1.034 3.365-2.037 4.152-.496.39-.99.654-1.357.82-.185.084-.856.308-.856.308"
      />
    </svg>
  );
};
export default BubbleChatSecure;
