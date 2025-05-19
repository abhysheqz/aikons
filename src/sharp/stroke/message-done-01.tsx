import React from "react";
const MessageDone_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.453 14.907h8.924M7.453 9.942h5.454"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.898 5.971 1.983 1.986L21.831 2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.998 3.004C2.474 3.436-.26 12.38 3.62 17.875l-1.613 3.916a.1.1 0 0 0 .127.131l4.337-1.598c2.276 1.482 8.579 1.52 10.833 0C19.578 19.067 23.03 16.56 21.484 9M9.998 3.004q.236-.014.478-.014m-.478.014 1.394-.005 1.288-.009"
      />
    </svg>
  );
};
export default MessageDone_01;
