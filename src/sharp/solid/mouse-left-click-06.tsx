import React from "react";
const MouseLeftClick_06: React.FC<
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
        d="m4.974 1.25.88 1.5L4.13 3.763l-.88-1.5zM2.25 4.786l2-.5.485 1.94-2 .5zM6.852 4.587C8.144 2.489 10.299 1.25 13.5 1.25s5.356 1.239 6.648 3.337C21.386 6.596 21.75 9.266 21.75 12s-.364 5.404-1.602 7.413c-1.292 2.098-3.447 3.337-6.648 3.337s-5.356-1.239-6.648-3.337C5.614 17.405 5.25 14.734 5.25 12s.364-5.404 1.602-7.413M8.5 5.617C7.677 6.954 7.294 8.807 7.21 11h5.29V9.5h-.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.5V3.256c-2.012.217-3.227 1.109-3.999 2.36M19.79 11c-.086-2.193-.469-4.046-1.292-5.383-.771-1.252-1.987-2.144-3.999-2.361V5h.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.5V11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_06;
