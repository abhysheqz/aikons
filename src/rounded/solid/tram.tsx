import React from "react";
const Tram: React.FC<
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
        d="M4 2a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-4.465l-1.703 2.555a1 1 0 0 1-1.664-1.11L12.132 3H5a1 1 0 0 1-1-1M8.447 19.105a1 1 0 0 1 .447 1.342l-1 2a1 1 0 0 1-1.788-.894l1-2a1 1 0 0 1 1.341-.448m7.106 0a1 1 0 0 1 1.341.448l1 2a1 1 0 0 1-1.788.894l-1-2a1 1 0 0 1 .447-1.342"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.93 4.25h.14c1.539 0 2.792 0 3.78.133 1.03.139 1.917.438 2.623 1.146s1.006 1.596 1.144 2.629c.133.99.133 2.245.133 3.787v1.11c0 1 0 1.878-.036 2.642-.012.258-.018.387-.105.47s-.22.083-.484.083H17.75a.75.75 0 0 0 0 1.5h.899c.373 0 .559 0 .647.14s.015.293-.131.599a3.5 3.5 0 0 1-.692.982c-.706.707-1.593 1.007-2.623 1.146-.989.133-2.241.133-3.78.133h-.14c-1.539 0-2.792 0-3.78-.133-1.03-.139-1.917-.439-2.623-1.146a3.5 3.5 0 0 1-.692-.982c-.146-.306-.22-.459-.131-.599.088-.14.274-.14.647-.14h.899a.75.75 0 0 0 0-1.5H4.875c-.265 0-.397 0-.484-.083s-.093-.212-.105-.47a59 59 0 0 1-.036-2.642v-1.11c0-1.542 0-2.797.133-3.787.138-1.033.437-1.921 1.144-2.629S7.12 4.522 8.15 4.383c.988-.133 2.241-.133 3.78-.133M6.335 8.834c.087-.084.217-.084.476-.084H17.19c.26 0 .39 0 .477.084.087.083.092.209.102.46.038.956.044 2.584.045 3.768 0 .228 0 .343-.067.425-.066.082-.176.106-.396.154q-.276.06-.593.123c-1.254.244-2.953.486-4.757.486s-3.503-.242-4.757-.486a27 27 0 0 1-.592-.122c-.22-.048-.33-.072-.396-.155-.067-.082-.067-.196-.066-.425 0-1.184.006-2.812.044-3.768.01-.251.015-.377.102-.46"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tram;
