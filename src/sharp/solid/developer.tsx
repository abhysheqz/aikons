import React from "react";
const Developer: React.FC<
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
        d="M1.75 10c0 2.868 1.398 5.41 3.55 7.004V22c0 .414.337.75.751.75h9.456a.75.75 0 0 0 .75-.75v-1.25h.011c1.778-.014 3.317-1.25 3.683-2.983l.466-2.296 1.472-.895a.75.75 0 0 0 .223-1.075l-2.657-3.74v-.427q0-.032-.002-.063c-.377-4.5-4.197-8.021-8.836-8.021C5.73 1.25 1.75 5.158 1.75 10m11.719-1.47 1.47 1.47-1.47 1.47 1.06 1.06L17.06 10l-2.53-2.53zm-6-1.06L8.53 8.53 7.06 10l1.47 1.47-1.06 1.06L4.94 10zm3.82-.707-2 6 1.423.474 2-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Developer;
