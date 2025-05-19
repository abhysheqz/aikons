import React from "react";
const Touch_06: React.FC<
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
        d="M9.257 2.02q.105-.014.21-.014.237 0 .46.055A1.5 1.5 0 0 1 11 3.5v5h.001v2a.375.375 0 0 0 .75 0V8.875h.626c.897 0 1.625.727 1.625 1.625v1a.375.375 0 0 0 .75 0v-1q-.002-.326-.084-.625h.709c.897 0 1.625.727 1.625 1.625v1a.375.375 0 0 0 .75 0v-1c0-.358-.08-.697-.22-1H18a2 2 0 0 1 2 2v4.096a4 4 0 0 1-.876 2.5L18 21.237v.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.5l-3.386-5.394a3.21 3.21 0 0 1 .482-4.303l2.16-1.89V13.5a.375.375 0 0 0 .75 0v-10q0-.13.016-.25a1.5 1.5 0 0 1 1.235-1.23"
      />
    </svg>
  );
};
export default Touch_06;
