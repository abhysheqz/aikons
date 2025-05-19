import React from "react";
const CircleArrowUp_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12 17a1 1 0 0 0 1-1v-4.5h.162c.29 0 .598 0 .84-.029.177-.021.827-.1 1.128-.71s-.045-1.152-.139-1.298a7 7 0 0 0-.504-.655l-.031-.038c-.288-.346-.63-.741-.974-1.055a3.6 3.6 0 0 0-.585-.446A1.8 1.8 0 0 0 12 7c-.383 0-.698.15-.897.269a3.6 3.6 0 0 0-.585.446c-.344.314-.686.709-.974 1.055l-.03.038c-.183.22-.376.453-.505.655-.094.146-.439.689-.139 1.298s.951.689 1.128.71c.242.03.55.03.84.029H11V16a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUp_02;
