import React from "react";
const LoginCircle_02: React.FC<
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
        d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m-4 15.5a.75.75 0 0 1-.75-.75V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-.75.75M18.75 12a.75.75 0 0 1-.75.75h-4.25v.311c0 .274 0 .542-.024.75-.018.163-.08.635-.498.852-.419.217-.798-.028-.927-.115a6 6 0 0 1-.556-.451l-.028-.024a9.5 9.5 0 0 1-.901-.873 3 3 0 0 1-.363-.498A1.44 1.44 0 0 1 10.25 12c0-.289.109-.534.203-.701.101-.179.231-.348.363-.5.264-.302.6-.608.901-.871l.028-.025c.198-.172.392-.34.556-.451.129-.086.508-.331.927-.115.418.217.48.69.498.852.024.208.024.476.024.75v.311H18a.75.75 0 0 1 .75.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LoginCircle_02;
