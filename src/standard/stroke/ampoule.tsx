import React from "react";
const Ampoule: React.FC<
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
        d="M21 16.008h-7M10 16.008H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 22v-7.764c0-1.37.774-2.623 2-3.236V9.5c-.401-.63-.5-1.305-.5-2 0-1.484.462-1.5 1-4.5.09-.57.5-1 1-1s.91.43 1 1c.538 3 1 3.016 1 4.5 0 .695-.099 1.37-.5 2V11c1.226.613 2 1.866 2 3.236V22zM3 22v-7.764c0-1.37.774-2.623 2-3.236V9.5c-.401-.63-.5-1.305-.5-2 0-1.484.462-1.5 1-4.5.09-.57.5-1 1-1s.91.43 1 1c.538 3 1 3.016 1 4.5 0 .695-.099 1.37-.5 2V11c1.226.613 2 1.866 2 3.236V22z"
      />
    </svg>
  );
};
export default Ampoule;
