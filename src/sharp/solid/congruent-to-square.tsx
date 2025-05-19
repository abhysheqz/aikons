import React from "react";
const CongruentToSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm4.881 7.225c.334-.622.86-.923 1.45-.971.615-.05 1.355.177 2.011.751l.003-.003c1.01.882 2.268 1.335 3.486 1.237 1.243-.1 2.384-.778 3.05-2.02l-1.762-.945c-.334.623-.86.924-1.45.971-.614.05-1.354-.177-2.01-.75l-.003.002c-1.01-.882-2.269-1.335-3.486-1.237-1.244.1-2.385.778-3.05 2.02zm-.88 4.527h10v-2H7zm0 3.5h10v-2H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CongruentToSquare;
