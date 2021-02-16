import styles from './CategoryCarousel.module.css';

const CategoryCarousel = ({ categories }) => {
  return (
    <>
      <div>
        Choose category
      </div>
      {
        categories.map(cat => (<CategoryItem category={cat} />))
      }
    </>
  )
};

const CategoryItem = ({ category }) => {
  return (
    <div className={styles.category}>
      { category.name }
    </div>
  )
};

export default CategoryCarousel;