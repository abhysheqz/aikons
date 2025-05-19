import React from "react";
const Hijab: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.5 5a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0V8a3 3 0 0 0-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 10c0 2.5-.32 4.4-3.733 6S7.5 19.833 7.5 21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9.5 8h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.302 7.519C18.302 4.47 15.705 2 12.5 2S6.698 4.47 6.698 7.519C6.698 9.617 4.9 15.034 2.5 18c6.004 5.333 13.996 5.333 20 0-2.402-2.966-4.198-8.383-4.198-10.481Z"
      />
    </svg>
  );
};
export default Hijab;
