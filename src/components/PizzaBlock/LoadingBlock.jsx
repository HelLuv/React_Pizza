import React from 'react'
import ContentLoader from 'react-content-loader'

const BlockLoading = () => {
	return (
		<ContentLoader
			className="pizza-block"
			speed={3}
			width={280}
			height={460}
			viewBox="0 0 280 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="132" cy="142" r="125" />
			<rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
			<rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
			<rect x="0" y="418" rx="6" ry="6" width="91" height="32" />
			<rect x="140" y="408" rx="25" ry="25" width="140" height="46" />
		</ContentLoader>
	)
}

export default BlockLoading;
