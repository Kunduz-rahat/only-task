import React from 'react'
import AuthForm from '../../components/AuthForm';
import Layout from '../../components/Layout';
interface AuthPageProps {
	
}
 
const AuthPage: React.FC<AuthPageProps> = (props) => {
	return (  
		<Layout>
			<AuthForm/>
		</Layout>
	);
}
 
export default AuthPage;