import cc from "classcat";

export default function Button({ children, ...props }) {
  console.log(props.className);
  return (
    <button
      {...props}
      className={cc([
        "w-full btn btn-primary outline-none text-white text-h2",
        props.className,
      ])}
    >
      {children}
    </button>
  );
}
