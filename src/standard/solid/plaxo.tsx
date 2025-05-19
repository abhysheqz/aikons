import React from "react";
const Plaxo: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 3.606 1.776 6.797 4.5 8.747V12a6.25 6.25 0 1 1 5.016 6.128 1.25 1.25 0 0 1 .491-2.451q.36.072.743.073A3.75 3.75 0 1 0 8.25 12v10.078c1.168.434 2.431.672 3.75.672 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plaxo;
