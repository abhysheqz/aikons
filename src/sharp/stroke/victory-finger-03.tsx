import React from "react";
const VictoryFinger_03: React.FC<
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
        strokeWidth={1.5}
        d="m6.994 13.495-1.67-9.508c-.15-.826.217-1.679 1.03-1.897.88-.237 1.752.206 1.964 1.09L9.63 8.326l.405 1.732 1.642-6.729c.183-.86.87-1.403 1.681-1.311.926.105 1.493.913 1.324 1.826l-.825 4.649m0 0-.338 1.995m.338-1.995c3.85-.472 3.173 1.666 3.173 3.488m-9.013 9.98v-2.007c-5.051-5.883-4.945-6.459-1.626-9.896m10.648 0c3.807-.592 2.858 1.68 2.963 3.608.222 4.092-2.153 5.85-2.55 6.306 0 0-.016 1.31-.016 2.033"
      />
    </svg>
  );
};
export default VictoryFinger_03;
