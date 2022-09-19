import './StackItem.css';
import { FC } from 'react';

interface IStackItemProps {
  name: string;
  size: string;
}

const StackItem: FC<IStackItemProps> = ({ name, size }) => {
  return (
    <li className={`stack-item stack-item_theme_${size}`}>
      <p className={`stack-item__name stack-item__name_theme_${size}`}>
        {name}
      </p>
    </li>
  );
}

export default StackItem;
