import React from "react";
const Berlin: React.FC<
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
        d="M8.42 3.695A.75.75 0 0 1 9 3.421h.607L9.6 3.404c-.114-.293-.266-.477-.436-.562l.67-1.342c.63.315.978.88 1.164 1.363.073.188.127.377.166.558h1.67c.039-.18.093-.37.166-.558.186-.482.534-1.048 1.164-1.363l.67 1.342c-.17.085-.322.27-.436.562l-.006.017H15a.75.75 0 0 1 .735.897l-1 5A.75.75 0 0 1 14 9.92h-4a.75.75 0 0 1-.735-.603l-1-5a.75.75 0 0 1 .155-.623"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 22.5H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 11v11.5h4.5V11zM10.75 11h-1.5v11.5h1.5zM14.75 11h-1.5v11.5h1.5zM20.75 11h-4.5v11.5h4.5zM16.89 4.92H22v1.5h-1.25v2H22v1.5h-6.146q.07-.17.107-.357zM7.11 4.92l.929 4.643q.037.187.107.358H2v-1.5h1.25v-2H2v-1.5z"
      />
    </svg>
  );
};
export default Berlin;
