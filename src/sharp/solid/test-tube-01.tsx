import React from "react";
const TestTube_01: React.FC<
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
        d="M15.252 2.75h1.752v-1.5h-10v1.5h1.748v5.579l-1.319 2.74-.023.03.007.004-5.089 10.572a.75.75 0 0 0 .676 1.075h17.998a.75.75 0 0 0 .676-1.075l-6.426-13.36zm-.822 9.429c.312-.105.561-.324.734-.584l-1.413-2.938V2.75h-3.5v5.921l-.774 1.61q.225.034.437.098c.8.235 1.671.78 2.494 1.308.978.627 1.63.624 2.022.492M8.036 16.26a1 1 0 0 1 .707-1.225l.009-.002a1 1 0 1 1 .518 1.932l-.01.002a1 1 0 0 1-1.224-.707m6.707.775a1 1 0 1 0 .518 1.932l.009-.002a1 1 0 1 0-.518-1.932z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_01;
