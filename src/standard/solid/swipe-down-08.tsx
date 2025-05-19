import React from "react";
const SwipeDown_08: React.FC<
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
        d="M15.576 5.617A1 1 0 0 1 16.5 5h1V2a1 1 0 1 1 2 0v3h1a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m3.348 12.09 2.557-2.557v4.966a.45.45 0 1 0 .9 0V3.534a1.288 1.288 0 0 1 2.577 0v8.386a.45.45 0 0 0 .9 0V8.784s.285-.026.468-.035c.293-.013.75 0 .75 0 .5 0 .962.163 1.335.439v3.63a.45.45 0 0 0 .9 0V9.75h.765c.73 0 1.377.347 1.788.884V13.5a.45.45 0 0 0 .9 0v-2.75h.312A2.25 2.25 0 0 1 19.75 13v6A3.75 3.75 0 0 1 16 22.75H8.606a3.75 3.75 0 0 1-3.12-1.67L2.88 17.171a3.75 3.75 0 0 1-.63-2.08v-.35a3.75 3.75 0 0 1 1.098-2.65"
      />
    </svg>
  );
};
export default SwipeDown_08;
