import React from "react";
const SecurityWifi: React.FC<
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
        d="M10.915 1.498c.368-.14.73-.248 1.085-.248s.717.109 1.085.248c.373.14.839.347 1.42.605.853.379 1.98.814 3.188 1.157.882.251 1.595.454 2.135.663.543.21 1.035.472 1.367.91.32.425.444.921.5 1.456.055.517.055 1.165.055 1.95v2.944c0 3.056-1.38 5.48-3.047 7.286-1.662 1.8-3.642 3.025-4.947 3.714l-.063.033c-.556.294-1.01.534-1.693.534s-1.137-.24-1.693-.534l-.063-.033c-1.305-.69-3.285-1.914-4.947-3.714-1.667-1.807-3.047-4.23-3.047-7.286V8.24c0-.785 0-1.433.055-1.95.057-.535.18-1.031.5-1.456.332-.438.824-.7 1.367-.91.54-.21 1.253-.412 2.135-.663a25 25 0 0 0 3.189-1.157c.58-.258 1.046-.465 1.419-.605M7.527 8.896c1.266-1.03 2.802-1.646 4.468-1.646 1.67 0 3.21.62 4.48 1.656a.75.75 0 1 1-.95 1.162c-1.033-.844-2.245-1.318-3.53-1.318-1.282 0-2.49.47-3.522 1.31a.75.75 0 1 1-.946-1.164m1.902 2.46a4.84 4.84 0 0 1 2.566-.745c.934 0 1.81.275 2.576.753a.75.75 0 1 1-.794 1.272 3.35 3.35 0 0 0-1.782-.525c-.63 0-1.23.183-1.775.52a.75.75 0 0 1-.79-1.275M12 14a1 1 0 1 0 0 2h.007a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SecurityWifi;
