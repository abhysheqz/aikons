import React from "react";
const DimSum_01: React.FC<
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
        d="M22.631 2.593a.75.75 0 0 1-.222 1.037l-8.353 5.404c-.319-.48-.565-.915-.751-1.3l8.289-5.364a.75.75 0 0 1 1.037.223m-.259 7.058-5.903 3.374a6 6 0 0 0-.226-.622 8 8 0 0 0-.362-.77l5.747-3.284a.75.75 0 1 1 .744 1.302"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.995 5.25a.75.75 0 0 1 .761.723c.018.494.325.852.67.982.304.114.668.069.962-.371a.75.75 0 0 1 1.248 0c.294.44.658.485.962.37.345-.129.651-.487.67-.981a.75.75 0 0 1 1.5.024c.002.552.44 2.158 2.33 4.426l.019.024q.433.565.764 1.186l-8.253 4.716a.75.75 0 1 0 .744 1.302l8.097-4.626c.198.655.38 1.6.277 2.552-.345 3.55-3.768 6.173-7.734 6.173-4.173 0-7.762-2.917-7.762-6.75 0-1.595.635-3.22 1.657-4.553l.02-.024c1.89-2.268 2.327-3.874 2.33-4.426a.75.75 0 0 1 .738-.747m2.176 5.586a.75.75 0 1 0-1.342-.671l-.5 1a.75.75 0 1 0 1.342.67zm3-.671a.75.75 0 0 0-1.342.67l.5 1a.75.75 0 0 0 1.342-.67z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DimSum_01;
