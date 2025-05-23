import React from "react";
const Moonset: React.FC<
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
        d="M20.506 3a1 1 0 0 0-2 0v3.5h-.594c-.176 0-.392 0-.568.022h-.004c-.126.016-.702.088-.976.653-.275.567.027 1.067.092 1.176l.34.468c.294.376.7.89 1.08 1.281.19.196.407.397.638.556.205.14.555.344.986.344s.78-.203.986-.344c.231-.16.448-.36.638-.556.38-.39.786-.905 1.08-1.28l.34-.47c.065-.108.367-.608.092-1.175-.274-.565-.85-.637-.976-.653h-.004a5 5 0 0 0-.568-.022h-.582zM6.43 5.449a7.98 7.98 0 0 1 6.286-.923.75.75 0 0 1 .416 1.159 5.88 5.88 0 0 0-.358 6.17c1.087 1.998 3.143 2.985 5.127 2.723a.75.75 0 0 1 .823.937 9.1 9.1 0 0 1-1.363 2.919.75.75 0 0 1-.611.316H4.54a.75.75 0 0 1-.612-.317 9 9 0 0 1-.562-.903C1.074 13.316 2.418 7.908 6.431 5.45"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 21a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Moonset;
