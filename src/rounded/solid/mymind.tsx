import React from "react";
const Mymind: React.FC<
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
        d="M15.786 3.125c1.998 1.54 3.62 3.923 4.431 6.776.81 2.854.672 5.692-.248 7.982-.922 2.292-2.646 4.068-4.996 4.662-2.344.592-4.762-.131-6.758-1.67-1.999-1.539-3.621-3.922-4.432-6.776-.81-2.853-.672-5.691.248-7.98.922-2.293 2.646-4.07 4.996-4.663 2.344-.592 4.762.13 6.759 1.67m-1.967 12.818L12 7l4.65 7.774c.266.444.398.665.334.879s-.298.329-.766.559l-.91.447c-.56.276-.841.414-1.073.302s-.293-.414-.416-1.018M8.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mymind;
