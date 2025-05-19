import React from "react";
const Whiteboard: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 12.017 4.5 9.6c.828-.801 2.172-.801 3 0 .828.8.828 2.098 0 2.899a2 2 0 0 0 0 2.9c.828.8 2.172.8 3 0l.5-.484M13 10.527l6.237-6.237a.99.99 0 0 1 1.399 0l1.074 1.074a.99.99 0 0 1 0 1.4L15.473 13H13z"
      />
    </svg>
  );
};
export default Whiteboard;
