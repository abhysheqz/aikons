import React from "react";
const PoundReceive: React.FC<
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
        d="M21.998 13.003H14.75m2.19-2.506-2.53 2.506 2.53 2.507M13.324 8.848c0-3.365-2.766-5.422-5.604-4.708-3.53 1.057-3.617 5.148-2.917 6.797 1.071 2.3 2.68 2.707 3.737 2.82-2.342-.355-1.542 3.725-5.697 6.21-.016.01-.01.035.007.035h9.603c.994 0 2.215-.675 2.52-1M2.002 13.759h8.695"
      />
    </svg>
  );
};
export default PoundReceive;
