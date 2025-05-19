import React from "react";
const Idea_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.906 17.47c.06-.297.252-.548.512-.704 1.85-1.114 3.082-2.93 3.082-5.266a6.5 6.5 0 1 0-13 0c0 2.336 1.232 4.152 3.082 5.266.26.156.453.407.512.703l.245 1.227a1 1 0 0 0 .98.804h3.361a1 1 0 0 0 .98-.804z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11.5h.5m-19 0H3m15.363-6.364.354-.354M5 18.5l.5-.5m13 0 .5.5M5.283 4.783l.354.354M12 2.5V2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 19.5V21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1.5"
      />
    </svg>
  );
};
export default Idea_01;
