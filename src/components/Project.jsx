import React from 'react'
import { 
	Segment, 
	Header, 
	Icon,
	Card,
	Grid
} from 'semantic-ui-react';

const Project = props => {

    return <Segment className='section-holder'>
        <Header as='h1' dividing icon textAlign='center'>
            <Header.Content>Projects</Header.Content>
        </Header>

				<Grid>

				<Grid.Row>
					<Grid.Column width={5}>
						<Card
							image='https://github.com/chetchopra/IsItWorthIt/raw/master/readmegifs/IsItWorthIt-Compare.gif'
							header='Is It Worth It'
							meta='Made by Chet Chopra, and Jenny Shaw'
							description='A tool to help users get some perspective on their purchases by comparing them to the monetary value of other items'
						/>
					</Grid.Column>

					<Grid.Column width={7}>
						
					<p><strong>
							Links
						</strong></p>
						<a href="https://chetchopra.github.io/IsItWorthIt/">Live Demo</a>

						<p><strong>
							Responsibilities
						</strong></p>

						<ul>
							<li>Created and taught lessons for a UW kids summer program. Educated youth in basic logic and robotics.</li>
							<li>Assisted students with computer science coursework to ensure they understood the concept.</li>

						</ul>
					</Grid.Column>
				</Grid.Row>
			</Grid>


 
    </Segment>
}

export default Project;