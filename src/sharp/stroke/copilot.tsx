import React from "react";
const Copilot: React.FC<
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
        strokeWidth={1.5}
        d="M13.845 4c.822 0 1.534.624 1.712 1.5l.213 1.048C16.002 7.688 16.93 8.5 18 8.5H11.38M13.845 4c-.791 0-1.484.578-1.693 1.412l-.77 3.088M13.844 4H7.977C6.326 4 4.88 5.207 4.444 6.948L2.5 15.5h7l1.881-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.153 20c-.822 0-1.534-.624-1.712-1.5l-.213-1.048c-.232-1.14-1.159-1.952-2.229-1.952h6.618M10.153 20c.791 0 1.484-.578 1.692-1.412l.771-3.088M10.154 20h5.867c1.652 0 3.1-1.207 3.534-2.948L21.5 8.5h-7l-1.883 7"
      />
    </svg>
  );
};
export default Copilot;
