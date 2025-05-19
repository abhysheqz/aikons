import React from "react";
const Exchange_03: React.FC<
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
        stroke="#000"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.138 20.724v-6.07m1.876 0v-1.517m0 9.104v-1.517m-1.876-3.035h3.753m0 0c.622 0 1.126.51 1.126 1.138v.759c0 .628-.504 1.138-1.126 1.138h-4.88m4.88-3.035c.622 0 1.126-.51 1.126-1.138v-.759c0-.628-.504-1.138-1.126-1.138h-4.88"
      />
      <path
        stroke="#000"
        strokeWidth={1.5}
        d="M11.008 5.044h7.006v5.058h-.5l-2.002-1.517M12.009 20.218H5.002V15.16h.5l2.002 1.518M5.502 10.875c1.375 0 2.518-.833 2.518-1.875S6.877 7.067 5.502 7.067s-2.49-.845-2.49-1.887c0-1.004 1.118-1.912 2.494-1.911m-.004 7.606c-1.084 0-2.033-.528-2.374-1.261m2.374 1.26v2.009m2.35-8.333c-.357-.81-.981-1.175-2.26-1.281h-.086m0 0V1.246"
      />
    </svg>
  );
};
export default Exchange_03;
