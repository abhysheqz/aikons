import React from "react";
const Strategy: React.FC<
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
        d="M17.293 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 .052 1.358l-3 3.5a1 1 0 0 1-1.518-1.302l1.522-1.776c-7.217.486-10.838 3.32-12.69 5.996a12 12 0 0 0-1.817 4.125 11 11 0 0 0-.226 1.346 7 7 0 0 0-.03.445v.017A1 1 0 0 1 2 21h1c-1 0-1 0-1-.002v-.058l.005-.132q.008-.17.035-.465c.039-.392.115-.943.267-1.6.302-1.31.907-3.06 2.12-4.812 2.25-3.248 6.469-6.339 14.234-6.855l-1.368-1.369a1 1 0 0 1 0-1.414M2 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.293 15.293a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L16.914 18.5l1.793 1.793a1 1 0 0 1-1.414 1.414L15.5 19.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Strategy;
