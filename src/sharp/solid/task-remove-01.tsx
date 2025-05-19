import React from "react";
const TaskRemove_01: React.FC<
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
      <path fill="currentColor" d="M14.5 1.25h-8v3.5h8z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3h3.25v3h10.5V3H19a.75.75 0 0 1 .75.75V14.8l-.707.708-2.293-2.293-3.535 3.535 2.293 2.293-2.293 2.293 1.414 1.414H2a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 2 3m4.002 8.75h9v-1.5h-9zm0 5h5v-1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19 22.75h-.128l.171-.171.147.146a.8.8 0 0 1-.19.025"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m20.457 19.043 2.293-2.293-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TaskRemove_01;
