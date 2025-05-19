import React from "react";
const StructureFail: React.FC<
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
        d="M15.016 5c0-1.414 0-2.121.511-2.56C16.04 2 16.862 2 18.51 2s2.47 0 2.982.44c.511.439.511 1.146.511 2.56s0 2.121-.511 2.56c-.512.44-1.335.44-2.982.44s-2.47 0-2.982-.44c-.511-.439-.511-1.146-.511-2.56ZM15.016 19c0-1.414 0-2.121.511-2.56.512-.44 1.335-.44 2.982-.44s2.47 0 2.982.44c.511.439.511 1.146.511 2.56s0 2.121-.511 2.56c-.512.44-1.335.44-2.982.44s-2.47 0-2.982-.44c-.511-.439-.511-1.146-.511-2.56Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.541 10.483-3.018 3.012m3.018 0-3.018-3.012M7.045 17.031c2.765 0 4.965-2.26 4.965-5.038s-2.241-5.03-5.006-5.03m.041 10.068c-2.764 0-5.047-2.26-5.047-5.038s2.241-5.03 5.006-5.03m.041 10.068c-.07 2.13 1.487 2.908 2.595 2.949h2.37M7.004 6.964c-.07-2.16 1.513-2.92 2.636-2.968h2.381"
      />
    </svg>
  );
};
export default StructureFail;
