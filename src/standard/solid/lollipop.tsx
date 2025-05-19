import React from "react";
const Lollipop: React.FC<
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
        d="M12 13a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.254 7.77a6.75 6.75 0 0 1 13.455-.522h-.71c-1.078 0-1.918.356-2.555.626l-.17.072c-.684.286-1.066.39-1.524.228-.499-.177-.81-.552-1.264-1.137l-.035-.044c-.414-.534-.968-1.25-1.918-1.583-.886-.31-1.914-.14-2.799.247-.9.395-1.765 1.062-2.352 1.916l-.011.016z"
      />
      <path
        fill="currentColor"
        d="M18.71 8.748A6.751 6.751 0 0 1 5.557 10.02a.8.8 0 0 0 .108-.132l.957-1.474c.413-.596 1.045-1.09 1.713-1.384.687-.3 1.302-.344 1.702-.205.498.175.81.548 1.263 1.13l.037.05c.413.532.967 1.247 1.911 1.581 1.043.37 1.91.033 2.602-.257l.155-.065c.654-.275 1.231-.517 1.994-.517z"
      />
    </svg>
  );
};
export default Lollipop;
