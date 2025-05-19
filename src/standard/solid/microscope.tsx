import React from "react";
const Microscope: React.FC<
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
        d="M14.386 3.398a3.284 3.284 0 0 0-4.492-1.206A3.297 3.297 0 0 0 8.69 6.69l.196.34a3.25 3.25 0 1 1 3.19 5.537l.42.732a1.764 1.764 0 0 0 2.412.647l2.638-1.526a1.77 1.77 0 0 0 .645-2.413zm4.116 11.694a1 1 0 0 0-1.002-1.73l-2.198 1.271a1 1 0 0 0 1.002 1.731zM13 9.5a2 2 0 0 1-3.728 1.007A3.5 3.5 0 0 0 9.5 17.5h.043l.018-.053c.238-.715.965-1.197 1.718-1.197a1.75 1.75 0 0 1 1.66 1.197l.018.053H18a1 1 0 1 1 0 2h-4.376l.25.75h5.876a1 1 0 1 1 0 2H4.25a1 1 0 1 1 0-2h4.376l.261-.784a5.5 5.5 0 0 1 .378-10.961A2 2 0 0 1 13 9.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Microscope;
