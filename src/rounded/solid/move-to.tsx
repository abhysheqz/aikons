import React from "react";
const MoveTo: React.FC<
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
        d="M8 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M4 5c0-.552.446-1 .996-1h.008C5.554 4 6 4.448 6 5s-.446 1-.996 1h-.008A1 1 0 0 1 4 5M4 11c0-.552.446-1 .996-1h.008c.55 0 .996.448.996 1s-.446 1-.996 1h-.008A1 1 0 0 1 4 11M4 17c0-.552.446-1 .996-1h.008c.55 0 .996.448.996 1s-.446 1-.996 1h-.008A1 1 0 0 1 4 17M8 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.24 14.35a1 1 0 0 1 1.41-.11l1.21 1.032c.242.207.494.422.678.628.207.232.462.595.462 1.1s-.255.868-.462 1.1c-.184.206-.436.421-.679.628l-1.21 1.033A1 1 0 0 1 16 19v-.4c0-.283 0-.424-.088-.512S15.682 18 15.4 18H9a1 1 0 1 1 0-2h6.4c.283 0 .424 0 .512-.088s.088-.23.088-.512v-.407a1 1 0 0 1 .24-.642"
      />
    </svg>
  );
};
export default MoveTo;
