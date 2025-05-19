import React from "react";
const Ski: React.FC<
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
        d="M16.733 4.245c0-1.101.891-1.995 1.992-1.995s1.992.894 1.992 1.995a1.994 1.994 0 0 1-1.992 1.996c-1.1 0-1.992-.894-1.992-1.996M22.5 13.267l-.83 1.245-4.365-2.915-.418-2.086-.95 1.172L5.483 3.704l.83-1.245L12.83 6.81l1.65-1.988 3.503 2.55.665 3.323zM11.085 8.633l3.934 2.681-.704.97 3.03 2.015-3.686 5.023-1.204-.886 2.758-3.759-2.377-1.581-3.419-2.302z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m3.308 10.943 14.321 9.22 2.927-.586.293 1.468-3.52.705L2.5 12.202z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ski;
