import React from "react";
const MapsCircle_01: React.FC<
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
        d="M12.57 14.352c.178.105.328.186.435.24l.493.233.494-.232a9.312 9.312 0 0 0 1.745-1.173c.936-.803 2.011-2.093 2.011-3.82 0-2.382-1.883-4.35-4.25-4.35s-4.25 1.968-4.25 4.35c0 1.727 1.076 3.017 2.012 3.82.48.41.955.723 1.31.932M13.492 8c-.825 0-1.494.672-1.494 1.5 0 .829.669 1.5 1.494 1.5h.013c.825 0 1.493-.671 1.493-1.5 0-.828-.668-1.5-1.493-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 2.608.929 5 2.474 6.861l5.277-5.276L3.926 8.51A8.798 8.798 0 0 1 20.797 12a8.8 8.8 0 0 1-5.305 8.076l-5.077-5.077-5.277 5.277A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25"
      />
    </svg>
  );
};
export default MapsCircle_01;
