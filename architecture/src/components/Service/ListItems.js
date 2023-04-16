import { Item } from "./Item"


export const ListItems = ({ listItems, onDetailsClick }) => {
  
    return (
        <div className="row equal-height-columns">
            {listItems.map(x => <Item key={x._id} {...x} onDetailsClick={onDetailsClick} />)}
        </div>
    )
}