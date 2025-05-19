import React from "react";
const Sink_02: React.FC<
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
        d="M13.5 3a.5.5 0 0 0-.5.5v4.75h1V6.5a1 1 0 1 1 2 0v1.75h3c.939 0 1.815.783 1.683 1.84a8.76 8.76 0 0 1-4.722 6.714l-.62 3.407a3.396 3.396 0 0 1-6.682 0l-.62-3.407a8.76 8.76 0 0 1-4.721-6.713C3.186 9.033 4.062 8.25 5 8.25h3V7H7a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2v1.25h1V3.5a2.5 2.5 0 0 1 5 0 1 1 0 1 1-2 0 .5.5 0 0 0-.5-.5m-3.29 14.567.416 2.287a1.396 1.396 0 0 0 2.748 0l.416-2.287a8.8 8.8 0 0 1-3.58 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sink_02;
