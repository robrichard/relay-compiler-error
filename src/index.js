function toString() {
	console.log('calling toString');
}

toString();

const foo = graphql`
	fragment src on Post {
		id
	}
`;