import React from "react";
const PointingLeft_03: React.FC<
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
        d="M12.437 5.295a2.49 2.49 0 0 1 3.094-.012l6.885 4.593a.75.75 0 0 1 .334.624v8A3.75 3.75 0 0 1 19 22.25h-5.522a3.75 3.75 0 0 1-3.75-3.75v-3.745H4.75a2.5 2.5 0 0 1 0-5h8.12l-.768-.896a2.49 2.49 0 0 1 .335-3.564"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.456 1.75 1.25 4.957l3.207 3.207L5.87 6.75l-.793-.793h3.586v-2H5.077l.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingLeft_03;
