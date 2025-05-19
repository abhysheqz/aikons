import React from "react";
const Presentation_07: React.FC<
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
        strokeWidth={1.5}
        d="M2.5 11.5c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h7c2.828 0 4.243 0 5.121-.879.879-.878.879-2.293.879-5.121v-2c0-2.828 0-4.243-.879-5.121C19.743 3.5 18.328 3.5 15.5 3.5h-7c-2.828 0-4.243 0-5.121.879C2.5 5.257 2.5 6.672 2.5 9.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 22 .328-.328c.578-.578.867-.867 1.235-1.02.367-.152.776-.152 1.594-.152h.686c.818 0 1.226 0 1.594.152.367.152.656.441 1.234 1.02L15.5 22M12 2v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 17.5V22"
      />
    </svg>
  );
};
export default Presentation_07;
