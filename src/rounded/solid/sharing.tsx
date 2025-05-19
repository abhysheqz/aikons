import React from "react";
const Sharing: React.FC<
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
        d="M8.25 16a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.196 4.25H6.75a1 1 0 1 1 0 2H4.663l4.293 4.293a1 1 0 1 1-1.414 1.415L3.25 7.665V9.75a1 1 0 0 1-2 0V7.196c0-.425 0-.837.046-1.177.051-.383.177-.82.54-1.183s.8-.489 1.183-.54c.34-.046.753-.046 1.177-.046M20.75 7.665V9.75a1 1 0 0 0 2 0V7.196c0-.425 0-.837-.046-1.177-.051-.383-.177-.82-.54-1.183s-.8-.489-1.184-.54c-.34-.046-.751-.046-1.176-.046H17.25a1 1 0 1 0 0 2h2.086l-4.292 4.293a1 1 0 0 0 1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sharing;
