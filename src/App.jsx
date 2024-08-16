import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/SimpleForm/StatefulForm/StatefulForm'

function App() {
	const handleSignUpSubmit = data => {
		console.log('sing up data', data);
        
	};

	const handleUpdateProfile = data => {
		console.log('update profile', data);
        
	};

	return (
		<>
			<h1>Vite + React</h1>
			{/* <SimpleForm></SimpleForm> */}
			{/* <StatefulForm></StatefulForm> */}
			{/* <RefForm></RefForm> */}
			{/* <HookForm></HookForm> */}
			<ReusableForm
				formTitle={"Sing UP"}
				handleSubmit={handleSignUpSubmit}
			>
                <div>
                    <h2>Sign UP</h2>
                    <p>please singn up right now</p>
                </div>
            </ReusableForm>
			<ReusableForm
				formTitle={"Profrile Update"}
                handleSubmit={handleUpdateProfile}
				submitBtnText="Update"
			>
                <div>
                    <h2>Update Profile</h2>
                    <p>Always keep your profile updated</p>
                </div>
            </ReusableForm>
		</>
	);
}

export default App;
