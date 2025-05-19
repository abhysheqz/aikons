import React from "react";
const Queue_02: React.FC<
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
        d="M5.946 13h12.108c.425 0 .837 0 1.177.046.383.051.82.177 1.183.54s.489.8.54 1.184c.046.34.046.806.046 1.23s0 .89-.046 1.23c-.051.384-.177.821-.54 1.184s-.8.489-1.184.54c-.34.046-.751.046-1.176.046H5.946c-.424 0-.837 0-1.177-.046-.383-.051-.82-.177-1.183-.54s-.489-.8-.54-1.184C3 16.89 3 16.425 3 16s0-.89.046-1.23c.051-.384.177-.821.54-1.184s.8-.489 1.183-.54C5.11 13 5.522 13 5.946 13"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 10a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Queue_02;
