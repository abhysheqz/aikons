import React from "react";
const Curtains: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 3.044H2M5 14.512c.598-.705 2-3.49 2-6.482m12 6.482c-.599-.705-2-3.49-2-6.482"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.004 2.999v11.538m0 0v6.364a.1.1 0 0 0 .1.1h3.914c-.125-2.56.102-4.098-1.687-6.712m-2.327.248C6.752 14.29 11.626 11.881 11.928 3M19.962 2.999v11.538m0 0v6.364a.1.1 0 0 1-.1.1h-3.915c.125-2.56-.102-4.098 1.688-6.712m2.327.248C17.214 14.29 12.34 11.881 12.038 3"
      />
    </svg>
  );
};
export default Curtains;
