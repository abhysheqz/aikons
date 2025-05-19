import React from "react";
const Idea_01: React.FC<
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
        d="M12 6.25c-3.154 0-5.75 2.644-5.75 5.956 0 .89.188 1.733.525 2.49l-1.37.609a7.6 7.6 0 0 1-.655-3.1C4.75 8.11 7.974 4.75 12 4.75s7.25 3.36 7.25 7.456a7.6 7.6 0 0 1-.654 3.099l-1.37-.61a6.1 6.1 0 0 0 .524-2.49c0-3.31-2.596-5.955-5.75-5.955M12.75 1.25v2.5h-1.5v-2.5zM22.75 12.75h-2.5v-1.5h2.5zM3.75 12.75h-2.5v-1.5h2.5zM20.131 4.929l-1.768 1.768-1.06-1.061 1.767-1.768zM5.637 6.697 3.869 4.93l1.06-1.061 1.768 1.768z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 15.75h8a.75.75 0 0 1 .735.897l-.32 1.603h-8.83l-.32-1.603A.75.75 0 0 1 8 15.75M8.866 19.75l.396 2.373a.75.75 0 0 0 .74.627h4a.75.75 0 0 0 .74-.627l.395-2.373z"
      />
    </svg>
  );
};
export default Idea_01;
