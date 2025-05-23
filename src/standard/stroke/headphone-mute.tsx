import React from "react";
const HeadphoneMute: React.FC<
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
        d="M4 13v-1.5a7.97 7.97 0 0 1 2-5.292M20 13v-1.5A8 8 0 0 0 8.5 4.304M17 13.5l1.48-.74a.93.93 0 0 1 .988.083C20.31 13.5 22 15 22 16.5c0 .511-.196 1.022-.488 1.5M17 17v1.882a1 1 0 0 0 .553.894l.928.465c.32.16.704.136.987-.084q.163-.127.361-.293M2 16.5c0-1.5 1.689-3.001 2.532-3.657a.93.93 0 0 1 .987-.084l.928.465a1 1 0 0 1 .553.894v4.764a1 1 0 0 1-.553.894l-.928.465a.93.93 0 0 1-.987-.084C3.69 19.5 2 18 2 16.5M2 2l20 20"
      />
    </svg>
  );
};
export default HeadphoneMute;
