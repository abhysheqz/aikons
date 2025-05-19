import React from "react";
const Limitation: React.FC<
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
        d="M12 4.17c-4.858 0-8.795 3.866-8.795 8.636 0 2.527 1.104 4.8 2.868 6.38L7.4 17.885l1.382 1.357-2.555 2.509-.679-.5C2.94 19.326 1.25 16.26 1.25 12.806 1.25 6.976 6.063 2.25 12 2.25s10.75 4.726 10.75 10.556c0 3.453-1.69 6.52-4.298 8.444l-.679.5-2.555-2.51 1.382-1.356 1.327 1.303c1.764-1.58 2.869-3.854 2.869-6.381 0-4.77-3.938-8.637-8.796-8.637"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.018 5.89-5 6-1.536-1.28 5-6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 12.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
    </svg>
  );
};
export default Limitation;
