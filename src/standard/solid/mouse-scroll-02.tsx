import React from "react";
const MouseScroll_02: React.FC<
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
        d="M12 1.25c-3.223 0-5.357 1.232-6.637 3.296C4.125 6.542 3.75 9.216 3.75 12c0 2.785.375 5.459 1.613 7.454C6.643 21.518 8.777 22.75 12 22.75s5.357-1.232 6.637-3.296c1.238-1.995 1.613-4.67 1.613-7.454 0-2.785-.375-5.458-1.613-7.454C17.357 2.482 15.223 1.25 12 1.25m.547 4.22a.75.75 0 0 0-1.058-.003L9.473 7.46a.75.75 0 0 0 1.054 1.066l.739-.73v3.4l-.737-.734a.75.75 0 0 0-1.058 1.062l2.015 2.01a.75.75 0 0 0 1.063-.005l1.985-2.009a.75.75 0 1 0-1.068-1.054l-.7.71v-3.36l.703.706a.75.75 0 1 0 1.063-1.058z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseScroll_02;
