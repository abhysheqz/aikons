import React from "react";
const Necklace: React.FC<
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
        d="M2 2.25a1 1 0 0 1 1 1c0 2.287 1.978 4.517 5.296 5.545a1 1 0 0 1-.592 1.91C3.958 9.545 1 6.778 1 3.25a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1c0 3.528-2.958 6.295-6.704 7.455a1 1 0 1 1-.592-1.91C19.022 7.767 21 5.537 21 3.25a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.547 11.684.336-2.682a3 3 0 0 1 .235 0l.335 2.682a3.4 3.4 0 0 0-.387.25l-.066.05-.067-.05a3.4 3.4 0 0 0-.386-.25m-1.963-.42.314-2.512c.06-.482.231-1.037.744-1.402C11.1 7.025 11.64 7 12 7s.9.025 1.358.35c.513.365.684.92.744 1.402l.314 2.512c.537.05 1.113.23 1.707.594 1.181.725 1.802 2.206 1.583 3.84-.221 1.648-1.28 3.455-3.43 5.047-.698.518-1.356 1.005-2.276 1.005-.921 0-1.578-.487-2.277-1.005-2.15-1.592-3.208-3.399-3.43-5.047-.219-1.634.402-3.115 1.583-3.84.595-.365 1.171-.545 1.708-.594"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Necklace;
