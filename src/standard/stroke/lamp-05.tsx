import React from "react";
const Lamp_05: React.FC<
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
        d="M9.5 14c.443.924.649 1.859.152 2.894l-.96 2c-.56 1.169.221 2.148.808 3.106h5c.587-.959 1.365-1.937.805-3.106l-.959-2c-.497-1.035-.29-1.97.154-2.894m-6 0h7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 10.004v4.002M9 19h6M16.971 10H7.029a1 1 0 0 1-.916-1.4l2.363-5.402A2 2 0 0 1 10.308 2h3.384a2 2 0 0 1 1.832 1.198L17.887 8.6A1 1 0 0 1 16.971 10Z"
      />
    </svg>
  );
};
export default Lamp_05;
