import React from "react";
const AiGenerative: React.FC<
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
        d="M17.798 1.25h1.404l.294.795c.41 1.106.548 1.436.786 1.673.237.238.567.377 1.673.786l.795.294v1.404l-.795.294c-1.106.41-1.436.548-1.673.786-.238.237-.377.567-.786 1.673l-.294.795h-1.404l-.294-.795c-.41-1.106-.548-1.436-.786-1.673-.237-.238-.567-.377-1.673-.786l-.795-.294V4.798l.795-.294c1.106-.41 1.436-.548 1.673-.786.238-.237.377-.567.786-1.673z"
      />
      <path
        fill="currentColor"
        d="M13 5.25H1.25v17.5h21.5V7.552l-1.572.603L20.072 11h-3.144l-1.054-2.845L13 7.072z"
      />
    </svg>
  );
};
export default AiGenerative;
