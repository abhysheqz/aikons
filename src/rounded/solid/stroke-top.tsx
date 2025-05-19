import React from "react";
const StrokeTop: React.FC<
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
        d="M5 6a1 1 0 0 1 1 1v8c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.735.099 1.717.101 3.159.101h2c1.443 0 2.424-.002 3.159-.1.706-.096 1.033-.263 1.255-.486.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159V7a1 1 0 1 1 2 0v8.07c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119h-2.142c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.928-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V7a1 1 0 0 1 1-1M2 2.998a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StrokeTop;
