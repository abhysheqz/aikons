import React from "react";
const Simcard_01: React.FC<
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
        d="M6 1.25A3.75 3.75 0 0 0 2.25 5v14A3.75 3.75 0 0 0 6 22.75h12A3.75 3.75 0 0 0 21.75 19V7.828c0-.729-.29-1.428-.805-1.944l-3.829-3.829a2.75 2.75 0 0 0-1.944-.805zm4.213 13.46a1 1 0 0 0-1.409-1.42l-2.008 1.994a1 1 0 0 0 0 1.42l2.008 1.994a1 1 0 0 0 1.41-1.42l-1.295-1.284zm5.006-1.396a1 1 0 0 0-1.409 1.42l1.27 1.26-1.305 1.296a1 1 0 1 0 1.409 1.42l2.02-2.006a1 1 0 0 0 0-1.42z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Simcard_01;
