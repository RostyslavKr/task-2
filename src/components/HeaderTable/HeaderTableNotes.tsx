export const HeaderTableNotes:React.FC = () => {
    return <li>
        <div>Name</div>
        <div>Created</div>
        <div>Category</div>
        <div>Content</div>
        <div>Dates</div>
        <div>
        <svg width="18px" height="18px">
            <use href="./images/sprite.svg#icon-pencil"></use>
          </svg>
          <svg width="18px" height="18px">
            <use href="./images/sprite.svg#icon-box-add"></use>
          </svg>
          <svg width="18px" height="18px">
            <use href="./images/sprite.svg#icon-bin2"></use>
          </svg>
        </div>
      </li>
}