import React from "react";
const KeyframeRemove: React.FC<
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
        d="M7.342 5.68C7.79 5.305 8.32 5 9 5s1.211.304 1.658.68c.408.345.845.836 1.335 1.387l.045.05 2.642 2.97c.667.75 1.23 1.381 1.617 1.944.409.595.703 1.222.703 1.969 0 .746-.294 1.374-.703 1.97-.388.562-.95 1.193-1.617 1.943l-2.687 3.02c-.49.55-.927 1.042-1.335 1.386-.447.377-.977.68-1.658.68s-1.211-.303-1.658-.68c-.408-.344-.845-.835-1.335-1.386l-2.687-3.02c-.667-.75-1.23-1.381-1.616-1.944C1.294 15.374 1 14.746 1 14s.294-1.373.704-1.968c.387-.563.949-1.194 1.616-1.944l.042-.047 2.6-2.923.045-.05c.49-.55.927-1.042 1.335-1.386"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 5a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default KeyframeRemove;
