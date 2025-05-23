import React from "react";
const Headphones: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5.52 12.76.927.464a1 1 0 0 1 .553.894v4.764a1 1 0 0 1-.553.894l-.928.465a.93.93 0 0 1-.987-.084C3.69 19.5 2 18 2 16.5s1.689-3.001 2.532-3.657a.93.93 0 0 1 .987-.084"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 13v-1.5a8 8 0 1 1 16 0V13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.468 12.843a.93.93 0 0 0-.987-.084l-.928.465a1 1 0 0 0-.553.894v4.764a1 1 0 0 0 .553.894l.928.465c.32.16.704.136.987-.084C20.31 19.5 22 18 22 16.5s-1.689-3.001-2.532-3.657"
      />
    </svg>
  );
};
export default Headphones;
