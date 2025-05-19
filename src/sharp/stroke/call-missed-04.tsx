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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m19.5 20 2.5-3.938c-6-5.416-14-5.416-20 0L4.5 20 8 18.523l.5-2.954c2-.984 5-.984 7 0l.5 2.954zM10.75 4H7v3.75m.43-3.32L12 9l5-5"
      />
    </svg>
  );
};
export default CallMissed_04;
