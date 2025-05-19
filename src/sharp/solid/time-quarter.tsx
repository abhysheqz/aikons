import React from "react";
const TimeQuarter: React.FC<
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
        d="M6 13h3.984c.218.44.576.798 1.016 1.016V16h2v-1.984A2.25 2.25 0 1 0 9.984 11H6z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.205 12A8.795 8.795 0 1 1 12 20.796v1.954c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12zm.208 2.37-.31-.927-1.853.619.31.927q.228.683.533 1.325l.418.884 1.766-.837-.418-.883a10 10 0 0 1-.446-1.108m1.892 3.333-.638-.74-1.481 1.274.637.74q.506.588 1.083 1.104l.729.65 1.301-1.457-.729-.651a10 10 0 0 1-.902-.92m3.168 2.429-.882-.42-.84 1.765.882.42q.676.32 1.395.553l.93.3.6-1.86-.93-.3a9 9 0 0 1-1.155-.458"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeQuarter;
