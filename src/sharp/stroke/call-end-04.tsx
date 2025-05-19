import React from "react";
const CallEnd_04: React.FC<
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
        d="M19.5 12 22 8.062c-6-5.416-14-5.416-20 0L4.5 12 8 10.523l.5-2.954c2-.984 5-.984 7 0l.5 2.954zM9.5 17.5 12 20l2.5-2.5m-2.5-5v6.891"
      />
    </svg>
  );
};
export default CallEnd_04;
