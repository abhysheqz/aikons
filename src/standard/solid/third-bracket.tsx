import React from "react";
const ThirdBracket: React.FC<
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
        d="M17 3a1 1 0 0 1 1-1h.5a3 3 0 0 1 3 3v4.333a1 1 0 0 0 .2.6l1.1 1.467a1 1 0 0 1 0 1.2l-1.1 1.467a1 1 0 0 0-.2.6V19a3 3 0 0 1-3 3H18a1 1 0 1 1 0-2h.5a1 1 0 0 0 1-1v-4.333a3 3 0 0 1 .6-1.8l.65-.867-.65-.867a3 3 0 0 1-.6-1.8V5a1 1 0 0 0-1-1H18a1 1 0 0 1-1-1M2.5 5a3 3 0 0 1 3-3H6a1 1 0 0 1 0 2h-.5a1 1 0 0 0-1 1v4.333a3 3 0 0 1-.6 1.8L3.25 12l.65.867a3 3 0 0 1 .6 1.8V19a1 1 0 0 0 1 1H6a1 1 0 1 1 0 2h-.5a3 3 0 0 1-3-3v-4.333a1 1 0 0 0-.2-.6L1.2 12.6a1 1 0 0 1 0-1.2l1.1-1.467a1 1 0 0 0 .2-.6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThirdBracket;
