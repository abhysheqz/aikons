import React from "react";
const Reminder: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 19.506v.492a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h.286M14.333 8.495C11.927 6.748 15.497 5 15.497 5s3.572 1.748 1.166 3.495m-2.33 0h2.33m-2.33 0-.446 2.005m2.776-2.005.623 2.005"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 2h-10a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1l.003 2.001a.5.5 0 0 0 .8.4l2.663-2A2 2 0 0 1 16.167 13H20.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
};
export default Reminder;
