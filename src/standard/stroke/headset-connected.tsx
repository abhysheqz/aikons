import React from "react";
const HeadsetConnected: React.FC<
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
        d="m5.52 13.26.927.464a1 1 0 0 1 .553.894v4.764a1 1 0 0 1-.553.894l-.928.465a.93.93 0 0 1-.987-.084C3.69 20 2 18.5 2 17s1.689-3.001 2.532-3.657a.93.93 0 0 1 .987-.084"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 13.5V11a8 8 0 1 1 16 0v2.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.468 13.343a.93.93 0 0 0-.987-.084l-.928.465a1 1 0 0 0-.553.894v4.764a1 1 0 0 0 .553.894l.928.465c.32.16.704.136.987-.084C20.31 20 22 18.5 22 17s-1.689-3.001-2.532-3.657M9 16.115C9.862 15.41 10.89 15 11.996 15c1.109 0 2.14.412 3.004 1.122M13.63 18.5a3.06 3.06 0 0 0-1.634-.482c-.585 0-1.137.172-1.627.477"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21h.006"
      />
    </svg>
  );
};
export default HeadsetConnected;
