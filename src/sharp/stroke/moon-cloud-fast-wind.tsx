import React from "react";
const MoonCloudFastWind: React.FC<
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
        strokeWidth={1.5}
        d="M14.154 21.915q.218.084.461.085C15.38 22 16 21.328 16 20.5s-.62-1.5-1.385-1.5c-.271 0-.524.085-.738.23-1.061.793-3.027 1.808-5.262 2.071m-2.769-.107A7.6 7.6 0 0 1 4 20.548M19 21h2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.51 10c-.8-.344-1.501-.957-1.966-1.8a4.4 4.4 0 0 1-.42-3.161c.98.774 2.348.908 3.478.225S7.306 3.275 7.154 2a4.07 4.07 0 0 1 2.407 1.96c.205.372.35.763.439 1.16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.232 17.774c1.458 0 3.043-.71 3.906-2.53.862-1.82 0-3.568-.744-4.397-.604-.675-2.04-1.424-3.162-1.35m0 0c-.02.6-.517 1.996-1.187 2.762m1.186-2.762c.137-1.778-.93-4.85-4.43-5.434-3.633-.605-5.822 2.39-6.033 4.503m0 0c.71-.052 2.232.127 3.334.93m-3.334-.93c-1.375.162-4.15 1.315-4.254 4.643s3.764 4.667 5.794 4.781c1.347.114 4.065-.254 5.286-1.982.318-.426.622-1.747-.55-2.528-1.15-.767-2.297.085-2.58.446-.133.17-.365.653-.365 1.08"
      />
    </svg>
  );
};
export default MoonCloudFastWind;
