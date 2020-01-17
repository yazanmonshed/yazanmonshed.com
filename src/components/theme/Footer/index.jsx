import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
// import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Yazan Al Monshed </h2>
				<span>	
					© All rights are reserved {new Date().getFullYear()} 
				</span>
			</Details>
			<Links>
				{/* {social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))} */}
				<a href="https://github.com/YazanALMonshed" target="_blank"><i style={{fontSize: '1.8rem', padding: '.4rem'}} className="fab fa-github"></i></a>
				<a href="https://www.facebook.com/profile.php?id=100011284960911" target="_blank"><i style={{fontSize: '1.8em', padding: '.4rem'}} className="fab fa-facebook-f"></i></a>
				<a href="https://twitter.com/YAZANMONSHED?lang=ar" target="_blank"><i style={{fontSize: '1.8rem', padding: '.4rem'}} className="fab fa-twitter"></i></a>
				<a href="https://www.linkedin.com/in/yazan-al-monshed-52b65215a/" target="_blank"><i style={{fontSize: '1.8rem', padding: '.4rem'}} className="fab fa-linkedin-in"></i></a>
				<a href="https://www.goodreads.com/user/show/70631180-yazan-al-monshed" target="_blank"><i style={{fontSize: '1.8rem', padding: '.4rem'}} className="fab fa-goodreads-g"></i></a>
			</Links>
		</Flex>
	</Wrapper>
)
