import React from "react";
const Certificate_01: React.FC<
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
        d="M1.25 4A2.75 2.75 0 0 1 4 1.25h14A2.75 2.75 0 0 1 20.75 4v3.491c0 .213-.216.359-.418.294A6 6 0 0 0 13.627 17c.054.075.073.17.05.26l-1.092 4.095c-.089.331-.107.67-.06.996.028.2-.116.398-.319.398H4A2.75 2.75 0 0 1 1.25 20zm5.71 3.25a.75.75 0 1 0 0 1.5h6.131a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h2.131a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 13.5a4.25 4.25 0 1 1 7.1 3.152l1.375 5.155a.75.75 0 0 1-1.097.844L18.5 20.864l-3.128 1.787a.75.75 0 0 1-1.097-.844l1.374-5.155A4.24 4.24 0 0 1 14.25 13.5m2.733 3.971-.796 2.987 1.94-1.11a.75.75 0 0 1 .745 0l1.94 1.11-.795-2.987a4.2 4.2 0 0 1-1.517.279 4.2 4.2 0 0 1-1.517-.279"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Certificate_01;
