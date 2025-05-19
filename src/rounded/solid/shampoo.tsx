import React from "react";
const Shampoo: React.FC<
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
        d="M10 8V7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v1"
      />
      <path
        fill="currentColor"
        d="M11.955 4.25h.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152V8a.75.75 0 0 1-.75.75h-4A.75.75 0 0 1 9.25 8V6.955c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 2.25a1 1 0 0 1 1-1h3.745a4 4 0 0 1 2.722 1.069l.213.198a1 1 0 0 1-1.36 1.466l-.214-.199a2 2 0 0 0-1.361-.534H13v1.362a1 1 0 1 1-2 0V3.25h-1a1 1 0 0 1-1-1M12 7.25A5.75 5.75 0 0 0 6.25 13v5.302c0 .462.003.882.02 1.259q.016.399.06.733c.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h2.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242V13A5.75 5.75 0 0 0 12 7.25m4.184 5a4.251 4.251 0 0 0-8.368 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shampoo;
