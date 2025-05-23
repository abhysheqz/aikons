import React from "react";
const Drag_04: React.FC<
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
        d="M17.699 5.979a2.356 2.356 0 0 1 3.035-.316 2.33 2.33 0 0 1 .416 3.482l-2.633 2.922 1.917 2.45c.757.983 1.17 1.926 1.078 2.85-.092.945-.686 1.651-1.423 2.206l-.03.022-3.25 2.202c-.607.46-1.38.842-2.221.933-.874.094-1.792-.132-2.59-.853l-3.629-3.271a3.35 3.35 0 0 1-1.072-3.05l.003-.016 1.256-6.528c.193-1 1.071-1.716 2.086-1.716 1.168 0 2.124.942 2.124 2.114v1.745zM9.37 2.771c.312-.886 1.153-1.527 2.128-1.527 1.22 0 2.256.986 2.256 2.256a2.257 2.257 0 0 1-2.256 2.256A2.26 2.26 0 0 1 9.374 4.29l-.675.063a.756.756 0 1 1-.141-1.506l.779-.072zM6.863 4.156a.756.756 0 0 1-.037 1.069l-.311.291-.275.296a.756.756 0 1 1-1.108-1.03l.293-.315.038-.038.331-.31a.756.756 0 0 1 1.069.037M4.647 6.901a.756.756 0 0 1 .704.805l-.046.671a2.23 2.23 0 0 1 1.46 2.075c.02 1.21-.917 2.283-2.206 2.304a2.29 2.29 0 0 1-2.317-2.238c-.016-1.011.646-1.852 1.549-2.155l.05-.759a.756.756 0 0 1 .806-.703"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drag_04;
