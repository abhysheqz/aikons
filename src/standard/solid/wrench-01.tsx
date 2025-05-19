import React from "react";
const Wrench_01: React.FC<
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
        d="M9.5 11.5v-6a3 3 0 0 1 3-3h5.776a.3.3 0 0 1 .212.512L15.25 6.25a1.768 1.768 0 1 0 2.5 2.5l3.238-3.238a.3.3 0 0 1 .512.212V11.5a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 11.5v-.56L2.798 16.14a3.578 3.578 0 1 0 5.06 5.06L13.062 16H12.5A4.5 4.5 0 0 1 8 11.5m-2.502 5.75c-.687 0-1.244.56-1.244 1.25s.557 1.25 1.244 1.25h.011c.688 0 1.245-.56 1.245-1.25s-.557-1.25-1.245-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wrench_01;
