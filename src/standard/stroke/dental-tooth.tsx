import React from "react";
const DentalTooth: React.FC<
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
        d="M12 5.176q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0l-.014.018C3.354 5.848.806 9.03 7.142 20.24c.264.466.789.76 1.354.76.902 0 1.607-.72 1.636-1.56.063-1.782.408-3.837 1.868-3.837s1.806 2.055 1.868 3.837c.029.84.734 1.56 1.636 1.56.565 0 1.09-.294 1.354-.76 6.365-11.261 3.764-14.42 2.748-15.69-1.471-1.837-4.611-2.284-6.917 0q-.357.353-.689.626m0 0C10.503 6.412 9.5 6.5 9 6"
      />
    </svg>
  );
};
export default DentalTooth;
