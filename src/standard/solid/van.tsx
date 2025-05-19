import React from "react";
const Van: React.FC<
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
      <circle cx={17} cy={16.75} r={2.5} fill="currentColor" />
      <circle cx={7} cy={16.75} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 4.75a1 1 0 1 0 0 2h.382l.5 1C1.927 9.684 1 11.83 1 15.75a1 1 0 0 0 .553.894l1.577.79q.072.035.144.067a3.8 3.8 0 1 1 7.393.25h2.666A3.803 3.803 0 0 1 17 12.95a3.8 3.8 0 0 1 3.667 4.8H21a2 2 0 0 0 2-2v-2.93a3 3 0 0 0-1.336-2.496l-1.967-1.311L17.4 5.95a3 3 0 0 0-2.4-1.2zM17.937 10 15.8 7.15a1 1 0 0 0-.8-.4h-1.917l.708 2.36c.159.528.645.89 1.197.89z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Van;
