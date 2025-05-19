import React from "react";
const Student: React.FC<
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
        d="M11.705 1.31a.75.75 0 0 1 .59 0l7 3a.75.75 0 0 1 .455.69v4a.75.75 0 0 1-1.5 0V6.137l-2 .858V8.5a.75.75 0 0 1-1.041.691 9 9 0 0 0-.741-.208C13.935 8.87 13.113 8.75 12 8.75s-1.935.12-2.468.233a9 9 0 0 0-.737.207.75.75 0 0 1-1.045-.69V6.995L4.705 5.689a.75.75 0 0 1 0-1.378z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 7.75a.75.75 0 0 1 .75.75v1a2.75 2.75 0 1 0 5.5 0v-1a.75.75 0 0 1 1.5 0v1a4.25 4.25 0 0 1-8.5 0v-1a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.387 16.066a8.74 8.74 0 0 1 9.227 0c.552.326 1.734 1.025 2.325 1.63.372.38.735.89.8 1.52.071.672-.211 1.3-.764 1.85-.923.918-2.059 1.684-3.546 1.684H8.572c-1.487 0-2.623-.766-3.546-1.684-.552-.55-.835-1.178-.764-1.85.066-.63.428-1.14.8-1.52.591-.605 1.773-1.304 2.326-1.63"
      />
    </svg>
  );
};
export default Student;
