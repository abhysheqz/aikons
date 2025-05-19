import React from "react";
const Monocle: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1.25 8.496a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 7.246a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 4.746v4.5h-1.5v-4.5zm-6 5v5.5h-1.5v-5.5zm6 1v4.5h-1.5v-4.5zm-6 6v2.75q0 .193.031.376l.124.74-1.48.248-.123-.74a4 4 0 0 1-.052-.624v-2.75zm6 0v2.75q0 .318-.052.624l-.124.74-1.48-.248.125-.74q.03-.183.031-.376v-2.75zm-5.207 4.622.707.25a2.25 2.25 0 0 0 1.5 0l.707-.25.5 1.415-.707.25a3.75 3.75 0 0 1-2.5 0l-.707-.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Monocle;
