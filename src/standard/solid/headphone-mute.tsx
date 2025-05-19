import React from "react";
const HeadphoneMute: React.FC<
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
        d="M18.146 12.09a1.68 1.68 0 0 1 1.782.161c.443.345 1.125.923 1.703 1.63.56.685 1.119 1.605 1.119 2.62 0 .523-.15 1.017-.36 1.455a.75.75 0 0 1-1.206.205l-4.325-4.325a.75.75 0 0 1 .195-1.201zm-14.074.161a1.68 1.68 0 0 1 1.782-.162l.929.464c.592.297.967.903.967 1.565v4.764a1.75 1.75 0 0 1-.967 1.566l-.929.464a1.68 1.68 0 0 1-1.782-.163c-.443-.344-1.125-.922-1.703-1.628-.56-.686-1.119-1.606-1.119-2.62s.558-1.935 1.12-2.62c.577-.707 1.259-1.285 1.702-1.63m12.643 4.056a.75.75 0 0 1 .819.166l2.829 2.865a.75.75 0 0 1-.05 1.1 12 12 0 0 1-.385.311 1.68 1.68 0 0 1-1.783.163l-.928-.464a1.75 1.75 0 0 1-.967-1.566V17a.75.75 0 0 1 .465-.693"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.5c-1.1 0-2.138.253-3.062.703a1 1 0 0 1-.876-1.798A9 9 0 0 1 21 11.5V13a1 1 0 1 1-2 0v-1.5a7 7 0 0 0-7-7m-5.338.959A1 1 0 0 1 6.75 6.87 6.97 6.97 0 0 0 5 11.5V13a1 1 0 1 1-2 0v-1.5a8.97 8.97 0 0 1 2.25-5.953 1 1 0 0 1 1.412-.088"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HeadphoneMute;
