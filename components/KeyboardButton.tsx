import React, {useState} from "react";

interface KeyboardButtonProps extends React.HTMLProps<HTMLButtonElement> {
	label: string,
	buttonSize?: "sm" | "lg",
	buttonType?: "primary" | "secondary",
}

const KeyboardButton = ({
    label, type,
    buttonSize = "lg",
	buttonType = "primary",
    ...props
}: KeyboardButtonProps) => {
	const [active, setActive] = useState(false)

	return (
		<button
			className={[
				"kbc-button", `kbc-button-${buttonSize}`, "no-container", `kbc-button-${buttonType}`,
				...(active ? ["active"] : [])
			].join(" ")}
			onKeyDown={() => setActive(true)}
			onKeyUp={() => setActive(false)}
			type={type as any}
			{...props}
			style={{
				color: "white", fontWeight: "bold", fontFamily: "monospace",
				...props.style
			}}
		>
			{label}
		</button>
	)
}
export default KeyboardButton