import useInputState from "../../hooks/useInputState";

const HookForm = () => {
	// const [name, handleNameChange] = useInputState("Rojoni Hooked");
	const [email, handleEmailChange] = useInputState("rojoni@sojoni.go");

	const handleSubmit = (e) => {
		console.log("form data", email);

		e.preventDefault();
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				{/* <input
					value={name}
					onChange={handleNameChange}
					type="text"
					name="name"
				/> */}
				<br />
				<input value={email} onChange={handleEmailChange} type="email" name="email" />
				<br />
				<input type="password" name="password" />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default HookForm;
