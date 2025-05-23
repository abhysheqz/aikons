import React from "react";
const NotificationOff_03: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.337 17.844c-1.286-.532-2.579-1.719-2.298-3.552.086-.561.336-1.043.591-1.443.229-.357.572-.801.753-1.063.475-.7.545-1.48.545-2.51 0-1.53.43-2.959 1.175-4.174l13.225 13.224c-4.37 1.374-9.888 1.213-13.99-.482M11.999 1.25c4.455 0 8.072 3.592 8.072 8.027 0 1.032.07 1.81.545 2.51.181.263.524.707.752 1.063.256.4.506.882.592 1.444.142.932-.121 1.696-.584 2.293-.226.291-.34.437-.564.45-.226.015-.381-.14-.692-.452L7.493 3.96c-.365-.365-.547-.547-.522-.785.025-.237.224-.366.623-.625a8.07 8.07 0 0 1 4.405-1.299M14.778 21.951a5.2 5.2 0 0 1-2.78.797 5.2 5.2 0 0 1-2.779-.797c-.713-.448-1.07-.673-.944-1.045.124-.373.616-.331 1.6-.248 1.407.12 2.84.12 4.247 0 .984-.083 1.476-.125 1.6.248.125.372-.231.597-.944 1.045"
      />
    </svg>
  );
};
export default NotificationOff_03;
