import React from "react";
const PaintBucket: React.FC<
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
        d="M9.63 1.537a.97.97 0 0 0-1.377-.002.98.98 0 0 0-.002 1.38l1.281 1.289-7.183 7.221a3.785 3.785 0 0 0 0 5.334l2.01 2.02c.832.837 1.517 1.526 2.13 2.01.641.507 1.302.873 2.099.945q.352.032.705 0c.797-.072 1.457-.438 2.098-.945.613-.484 1.299-1.173 2.13-2.01l5.945-5.975a.98.98 0 0 0 0-1.379zm-4.245 9.6 5.523-5.551 5.522 5.552z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.484 16.456a.75.75 0 0 1 1.032 0l.008.008c.204.212.794.825 1.057 1.147.264.323.543.701.76 1.086.206.365.409.83.409 1.303a2.75 2.75 0 1 1-5.5 0c0-.473.203-.938.409-1.303a8 8 0 0 1 .76-1.086c.263-.322.853-.935 1.057-1.147z"
      />
    </svg>
  );
};
export default PaintBucket;
