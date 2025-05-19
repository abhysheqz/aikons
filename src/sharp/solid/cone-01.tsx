import React from "react";
const Cone_01: React.FC<
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
        d="M12 1.25a.97.97 0 0 0-.84.483L2.632 16.63a2.7 2.7 0 0 0-.382 1.37c0 .797.366 1.5.914 2.075.544.572 1.296 1.052 2.167 1.44 1.746.775 4.104 1.236 6.669 1.236s4.923-.46 6.669-1.236c.871-.388 1.623-.868 2.167-1.44.548-.576.914-1.278.914-2.074 0-.517-.154-.995-.413-1.424L12.84 1.733a.97.97 0 0 0-.84-.483m5.688 12.856c-1.605-.544-3.577-.856-5.689-.856-2.107 0-4.074.31-5.677.852L12 4.153z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cone_01;
