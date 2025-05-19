import React from "react";
const Dumbbell_01: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.75 13.703s.905-1.222 1.5-1.5c1.795-.84 2.16-1.205 3-3 .278-.594 1.5-1.5 1.5-1.5m-3.5 8.5s1.222-.905 1.5-1.5c.84-1.795 1.205-2.16 3-3 .595-.278 1.5-1.5 1.5-1.5M3.903 17.453l-.865.866a1.836 1.836 0 1 0 2.596 2.596l.866-.865M17.5 3.856l.866-.865a1.836 1.836 0 1 1 2.596 2.597l-.865.865"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m21.97 8.397-6.394-6.414a.1.1 0 0 0-.142 0L12.03 5.354a.1.1 0 0 0 0 .142l6.406 6.427a.1.1 0 0 0 .142 0l3.393-3.385a.1.1 0 0 0 0-.142ZM11.97 18.397l-6.394-6.414a.1.1 0 0 0-.142 0L2.03 15.354a.1.1 0 0 0 0 .142l6.406 6.427a.1.1 0 0 0 .142 0l3.393-3.385a.1.1 0 0 0 0-.142Z"
      />
    </svg>
  );
};
export default Dumbbell_01;
