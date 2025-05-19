import React from "react";
const LessThanCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m2.672 7.49a1 1 0 0 0-1.344-1.48l-3.332 3.02a4.4 4.4 0 0 0-.647.699C9.166 11.239 9 11.58 9 12c0 .42.166.762.349 1.021.176.251.409.484.647.7l3.332 3.02a1 1 0 0 0 1.344-1.482l-3.333-3.02a4 4 0 0 1-.246-.239c.058-.062.137-.14.246-.239z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LessThanCircle;
