import React from "react";
const EuroReceive: React.FC<
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
        d="M4.09 9c.487-3.289 2.907-6 6.099-6 1.867 0 3.499.957 4.603 2.39a1 1 0 1 1-1.584 1.22C12.416 5.584 11.335 5 10.188 5 8.338 5 6.57 6.601 6.114 9H9a1 1 0 0 1 0 2H6v2h3a1 1 0 1 1 0 2H6.113c.456 2.399 2.224 4 4.076 4 1.146 0 2.227-.584 3.019-1.61a1 1 0 1 1 1.584 1.22C13.688 20.043 12.056 21 10.189 21c-3.192 0-5.612-2.711-6.099-6H3a1 1 0 1 1 0-2h1v-2H3a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.883 8.576a1 1 0 0 1 .617.924V11H21a1 1 0 1 1 0 2h-3.5v1.5a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EuroReceive;
