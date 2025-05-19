import React from "react";
const Mouse_11: React.FC<
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
        d="M5.352 4.587C6.644 2.489 8.799 1.25 12 1.25s5.356 1.239 6.648 3.337C19.886 6.596 20.25 9.266 20.25 12s-.364 5.404-1.602 7.413C17.356 21.511 15.201 22.75 12 22.75s-5.356-1.239-6.648-3.337C4.114 17.405 3.75 14.734 3.75 12s.364-5.404 1.602-7.413M7 5.617C6.177 6.954 5.794 8.807 5.71 11h5.29V9.5h-.5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.5V3.256C8.987 3.473 7.772 4.365 7 5.616M18.29 11c-.086-2.193-.469-4.046-1.292-5.383-.771-1.252-1.987-2.144-3.999-2.361V5h.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.5V11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_11;
