import React from "react";
const Refresh: React.FC<
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
        d="M12 3.205A8.795 8.795 0 1 0 20.796 12a.977.977 0 1 1 1.954 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25c2.125 0 4.107.617 5.775 1.682L19 1.707a.976.976 0 0 1 1.805.52v3.061c0 1.194-1.484 1.738-2.257.84A8.77 8.77 0 0 0 12 3.205"
      />
    </svg>
  );
};
export default Refresh;
