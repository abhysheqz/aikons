import React from "react";
const CloudHailstone: React.FC<
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
        d="M13 14.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10 17.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 21.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 18.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 20.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0M19 20.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      />
      <path
        fill="currentColor"
        d="M5.853 6.865a5.752 5.752 0 0 0-.769 11.058 2.5 2.5 0 0 1 1.48-.11 2.5 2.5 0 0 1 3-3 2.5 2.5 0 1 1 4.872 0q.272-.061.564-.063a2.5 2.5 0 0 1 2.436 3.064 2.5 2.5 0 0 1 1.66.189 5.252 5.252 0 0 0-.85-10.2 6.25 6.25 0 0 0-12.393-.938"
      />
    </svg>
  );
};
export default CloudHailstone;
