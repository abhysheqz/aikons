import React from "react";
const CallMissed_04: React.FC<
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
        d="m20.197 19.52 1.643-2.592a.995.995 0 0 0-.194-1.304c-5.879-4.832-13.414-4.832-19.292 0a.995.995 0 0 0-.194 1.304l1.643 2.593c.27.425.807.594 1.27.398l2.283-.965c.325-.137.557-.431.616-.779l.42-2.49c2.062-1.017 5.154-1.017 7.215 0l.421 2.49c.059.348.291.642.616.779l2.282.965a1.03 1.03 0 0 0 1.271-.398M10.75 4H7v3.75m.43-3.32L12 9l5-5"
      />
    </svg>
  );
};
export default CallMissed_04;
