import React from "react";
const Tree_07: React.FC<
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
        d="M12 22v-4M12 8c-1.3 0-2.33-.27-3.019-.53-.548-.207-.666-.864-.3-1.322l2.538-3.172a1 1 0 0 1 1.562 0l2.538 3.172c.366.458.248 1.115-.3 1.322C14.329 7.73 13.3 8 12 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 7.5 2.4 3.2c.331.442.23 1.055-.27 1.287C16.185 12.425 14.475 13 12 13s-4.186-.575-5.13-1.013c-.5-.232-.601-.845-.27-1.287L9 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 12.5 1.576 2.757c.244.428.135.964-.294 1.207C17.242 17.055 15.093 18 12 18s-5.241-.945-6.282-1.536c-.429-.243-.538-.78-.294-1.207L7 12.5M10 22h4"
      />
    </svg>
  );
};
export default Tree_07;
