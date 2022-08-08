import React from 'react'
import Header from '../Header';
import {Container} from './styles'
interface LayoutProps {
	children:React.ReactNode
}
 
const Layout: React.FC<LayoutProps> = ({children}) => {
	return (  
		<Container>
			<Header/>
			<main>{children}</main>
		</Container>
	);
}
 
export default Layout;