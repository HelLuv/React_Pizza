import { PropTypes } from 'prop-types';
import React, { memo } from 'react';

const Categories = memo(({ activeCategory, items, onClickCategory }) => {

	return (
		<div className="categories">
			<ul>
				<li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
				{items && items.map((item, index) => <li
					className={activeCategory === index ? 'active' : ''}
					onClick={() => onClickCategory(index)}
					key={`${item}_${index}`}>{item}</li>)}
			</ul>
		</div>
	)
});

Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number, null]),
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;


// class Categories extends Component {
// 	state = {
// 		activeItem: 3
// 	};

// 	onItemSelect = (index) => {
// 		this.setState({
// 			activeItem: index
// 		})
// 	}

// 	render() {
// 		const { items, onCategoryClick } = this.props;
// 		return (
// 			<div className="categories">
// 				<ul>
// 					{/* <li className="active">Все</li> */}
// 					{items.map((item, index) =>
// 						<li className={this.state.activeItem === index ? 'active' : ''}
// 							onClick={() => this.onItemSelect(index)}
// 							key={`${item}_${index}`}>{item}</li>)}
// 				</ul>
// 			</div>
// 		);
// 	}
// }