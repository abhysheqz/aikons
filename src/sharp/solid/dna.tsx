import React from "react";
const Dna: React.FC<
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
        d="M16.281 2.67a3.57 3.57 0 0 0 5.05 5.049l1.42 1.42a5.57 5.57 0 0 1-4.869 1.557q.14.631.142 1.304a6.024 6.024 0 0 1-7.328 5.882A5.57 5.57 0 0 1 9.14 22.75l-1.42-1.42a3.57 3.57 0 1 0-5.05-5.05l-1.42-1.42a5.57 5.57 0 0 1 4.868-1.556 6.024 6.024 0 0 1 7.187-7.186A5.57 5.57 0 0 1 14.86 1.25zM12 7.984a4.016 4.016 0 1 0 0 8.032 4.016 4.016 0 0 0 0-8.032"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dna;
