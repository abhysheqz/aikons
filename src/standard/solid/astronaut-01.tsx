import React from "react";
const Astronaut_01: React.FC<
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
      <circle
        cx={12}
        cy={11}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <path
        fill="currentColor"
        d="M12 3a8 8 0 0 0-8 8v9H2v-9C2 5.477 6.477 1 12 1s10 4.477 10 10a9.98 9.98 0 0 1-3.714 7.777l-1.258-1.554.073-.06-2.855-2.852V7.689L17.1 4.837A7.97 7.97 0 0 0 12 3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.138 17c.795 0 1.386 0 1.897.136a4 4 0 0 1 2.829 2.829c.137.511.136 1.102.136 1.897V22a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h14.138"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Astronaut_01;
