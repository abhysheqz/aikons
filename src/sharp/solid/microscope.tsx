import React from "react";
const Microscope: React.FC<
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
        d="M9.885 2.193A3.263 3.263 0 0 1 14.361 3.4l4.66 8.136-5.668 3.298-1.294-2.26a3.251 3.251 0 1 0-3.174-5.541l-.197-.344a3.305 3.305 0 0 1 1.197-4.496m5.859 14.477-.984-1.742 3.234-1.882.994 1.736zM13 9.5a2 2 0 0 1-3.728 1.007A3.5 3.5 0 0 0 9.5 17.5h.042l.018-.053c.238-.715.965-1.197 1.719-1.197a1.75 1.75 0 0 1 1.66 1.197l.018.053H19v2h-5.376l.25.75h6.876v2H3.25v-2h5.376l.26-.784a5.5 5.5 0 0 1 .379-10.961A2 2 0 0 1 13 9.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Microscope;
