import React from "react";
const MosqueLocation: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.503 7.497a2.5 2.5 0 1 0-2.501 3.948m.5 6.547C6.516 16.076 2.5 13.125 2.5 9.137 2.5 5.225 5.688 2 9.447 2c1.968 0 3.778.883 5.057 2.285"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.865 14.992c-2.229-3.727.699-5.468 1.265-5.982.453-.41 2.175-1.384 2.874-2.006.593.539 2.523 1.649 2.867 1.986s3.663 2.316 1.258 6.002m-8.264 0h8.263m-8.263 0H9.519h12.978-2.369m-8.263 0v7.01h4.132m4.131-7.01v7.01h-4.131m0 0v-3.025"
      />
    </svg>
  );
};
export default MosqueLocation;
