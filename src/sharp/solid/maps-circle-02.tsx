import React from "react";
const MapsCircle_02: React.FC<
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
        d="M13.5 5.25c-2.29 0-4.25 1.728-4.25 3.982 0 1.29.576 2.285 1.59 3.106.284.23.7.605 1.098 1.005.407.408.756.8.938 1.073a.75.75 0 0 0 1.234.02c.42-.587 1.465-1.624 2.05-2.098 1.014-.821 1.59-1.816 1.59-3.106 0-2.254-1.96-3.982-4.25-3.982M13.493 8C12.67 8 12 8.672 12 9.5s.669 1.5 1.493 1.5h.014C14.33 11 15 10.328 15 9.5S14.331 8 13.507 8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 2.608.929 5 2.474 6.861l5.277-5.276L3.926 8.51A8.798 8.798 0 0 1 20.797 12a8.8 8.8 0 0 1-5.305 8.076l-5.077-5.077-5.277 5.277A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25"
      />
    </svg>
  );
};
export default MapsCircle_02;
