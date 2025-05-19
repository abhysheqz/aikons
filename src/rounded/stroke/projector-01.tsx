import React from "react";
const Projector_01: React.FC<
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
        strokeWidth={1.5}
        d="M11.5 10h-5c-1.875 0-2.812 0-3.47.477a2.5 2.5 0 0 0-.553.553C2 11.689 2 12.626 2 14.5s0 2.812.477 3.47a2.5 2.5 0 0 0 .554.553C3.688 19 4.625 19 6.5 19h11c1.875 0 2.812 0 3.47-.477a2.5 2.5 0 0 0 .553-.553C22 17.312 22 16.375 22 14.5s0-2.812-.477-3.47a2.5 2.5 0 0 0-.553-.553c-.453-.328-1.038-.43-1.97-.463"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 13.5h.009"
      />
      <circle
        cx={15.5}
        cy={10}
        r={3.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 19 5 22M17.5 19l1.5 3M12.5 5l-1-1m8 0-1 1m-3-1V2"
      />
    </svg>
  );
};
export default Projector_01;
