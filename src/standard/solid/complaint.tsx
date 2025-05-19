import React from "react";
const Complaint: React.FC<
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
        d="M4 11.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m-3 10C1 18.509 3.867 16 7.25 16s6.25 2.509 6.25 5.75a.75.75 0 0 1-.75.75h-11a.75.75 0 0 1-.75-.75M16.75 1C13.606 1 11 3.447 11 6.533c0 1.479.603 2.818 1.575 3.805.016.016.052.07.052.07a1.9 1.9 0 0 1-.384.816.75.75 0 0 0 .445 1.21c.891.166 1.813.016 2.602-.404.083-.044.14-.075.184-.097l.17.031q.549.103 1.106.103c3.144 0 5.75-2.447 5.75-5.534S19.894 1 16.75 1m.758 3.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM16.75 8a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Complaint;
