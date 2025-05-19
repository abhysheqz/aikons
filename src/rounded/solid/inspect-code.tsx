import React from "react";
const InspectCode: React.FC<
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
        d="M16.543 16.543a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1-1.414 1.414l-4.5-4.5a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 11c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S1.25 16.385 1.25 11M11 3.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.743 8.847a1 1 0 0 0 .104 1.41l.862.743-.862.742a1 1 0 0 0 1.306 1.515l.92-.792.032-.028c.164-.141.356-.307.499-.468.165-.187.396-.51.396-.969s-.23-.782-.396-.969a5 5 0 0 0-.5-.468l-.031-.028-.92-.792a1 1 0 0 0-1.41.104M8.258 8.847a1 1 0 0 1-.105 1.41L7.291 11l.862.742a1 1 0 0 1-1.306 1.515l-.92-.792-.032-.028a5 5 0 0 1-.499-.468C5.231 11.782 5 11.459 5 11s.23-.782.396-.969a5 5 0 0 1 .5-.468l.031-.028.92-.792a1 1 0 0 1 1.41.104"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.372 7.572a1 1 0 0 1 .557 1.3l-2 5a1 1 0 0 1-1.857-.743l2-5a1 1 0 0 1 1.3-.557"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InspectCode;
