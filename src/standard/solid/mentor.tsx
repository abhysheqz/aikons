import React from "react";
const Mentor: React.FC<
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
        d="M1 10.5a2 2 0 0 1 2-2h8.5a1 1 0 1 1 0 2H8V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zM15.25 12.638a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-2 8.362a4.75 4.75 0 0 1 9.5 0 .75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75M1.75 4.748A2.75 2.75 0 0 1 4.5 2a2.75 2.75 0 1 1-2.75 2.748M8.5 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M8.5 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mentor;
