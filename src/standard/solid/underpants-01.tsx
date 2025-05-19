import React from "react";
const Underpants_01: React.FC<
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
        d="M3.509 5.412A2.75 2.75 0 0 1 6.238 3h12.484a2.75 2.75 0 0 1 2.729 2.409l.199 1.595H3.31zm-.384 3.092-1.104 8.908a2.75 2.75 0 0 0 2.73 3.088h4c.751 0 1.419-.48 1.658-1.192l.52-1.549a4.6 4.6 0 0 1-1.685-1.202 5.7 5.7 0 0 1-.886-1.325l-.046-.1L8.3 15.1l-.004-.01-.002-.004v-.003a.75.75 0 0 1 1.39-.56l.005.012.027.057a4.188 4.188 0 0 0 .644.96c.471.525 1.159 1.003 2.13 1.003s1.658-.478 2.13-1.002a4.2 4.2 0 0 0 .67-1.018l.004-.011a.75.75 0 0 1 1.392.56l-.001.002-.002.004-.004.01-.013.031q-.016.039-.046.101a5.683 5.683 0 0 1-.886 1.324 4.6 4.6 0 0 1-1.714 1.214l.52 1.54a1.75 1.75 0 0 0 1.658 1.19h4.025a2.75 2.75 0 0 0 2.728-3.091l-1.113-8.905z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Underpants_01;
