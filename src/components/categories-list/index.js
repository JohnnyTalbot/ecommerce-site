import './styles.scss'

import CategoryItem from '../category-item';

const CategoriesList = ({categories}) => {

      return(
        <div className="categories-container">
            {
                categories.map(({id, title, imageUrl}) => {
                    return (
                        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
                    )
                })
            }
        </div>
      )
}

export default CategoriesList;