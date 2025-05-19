import React from "react";
const VictoryFinger_02: React.FC<
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
        d="M5.555 4.746c-.28-1.552.902-2.996 2.485-2.996 1.133 0 2.122.757 2.43 1.846L11.36 8l.9-4.423a2.504 2.504 0 0 1 2.405-1.827c1.591 0 2.766 1.47 2.45 3.022l-.005.025-1.118 4.682c.423.07.73.13.993.216 2.229.726 3.585 2.986 3.2 5.304-.016.095-.085.37-.167.69l-.343 1.319c-.269 1.024-.596 2.257-.847 3.2a2.75 2.75 0 0 1-2.656 2.042h-7.46a2.75 2.75 0 0 1-2.438-1.478l-1.46-2.8-.007-.014-.014-.027c-.31-.625-.562-1.134-.735-1.57-.181-.455-.297-.878-.307-1.336a3.8 3.8 0 0 1 .132-1.075c.12-.443.335-.824.62-1.221.274-.38.641-.813 1.092-1.342l1.168-1.373a1 1 0 0 1 .079-.08l-1.277-5.14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default VictoryFinger_02;
