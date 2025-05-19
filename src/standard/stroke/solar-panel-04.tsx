import React from "react";
const SolarPanel_04: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 9H6.28a1 1 0 0 0-.97.758l-2 8A1 1 0 0 0 4.28 19h15.44a1 1 0 0 0 .97-1.242l-2-8A1 1 0 0 0 17.72 9H15M12 12v7m7.5-5h-15M12 19v3m0 0h2m-2 0h-2M12.5 2 10 5.5h4L11.5 9"
      />
    </svg>
  );
};
export default SolarPanel_04;
