import React from "react";
const Patio: React.FC<
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
        d="M9.5 14H4.25v8.75h15.5V14H9.5m0 0c.414 0 .75.346.75.772v7.206a.76.76 0 0 1-.75.772.76.76 0 0 1-.75-.772v-7.206c0-.426.336-.772.75-.772m5 0a.76.76 0 0 0-.75.772v7.206c0 .426.336.772.75.772s.75-.346.75-.772v-7.206A.76.76 0 0 0 14.5 14"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21.75a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M1.106 15.553A2.81 2.81 0 0 1 3.618 14h16.764c1.064 0 2.037.601 2.513 1.553a1 1 0 1 1-1.79.894.81.81 0 0 0-.723-.447H3.618a.81.81 0 0 0-.723.447 1 1 0 1 1-1.79-.894"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 8.25a7 7 0 1 1 14 0v6a1 1 0 1 1-2 0v-6H7v6a1 1 0 1 1-2 0zm2.416-2H10L8.69 4.503A5 5 0 0 0 7.416 6.25m3.021-2.75L12 5.582 13.563 3.5A5 5 0 0 0 12 3.25c-.546 0-1.071.087-1.563.25m4.874 1.003L14 6.25h2.583a5 5 0 0 0-1.273-1.747"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Patio;
