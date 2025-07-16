import { useSortable } from "@dnd-kit/sortable";
import { Task } from "../pages/Base";
import { CSS } from "@dnd-kit/utilities";
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string | number;
  task: Task;
}

export function SortableTaskItem(props: Props) {
  const navigate = useNavigate();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <li className="task-item">
        <span className="task-grab" {...listeners} > ≡ </span>
        <h3 className="task-title">{props.task.title}</h3>
        <Button className="thirdry" label="詳細" onClick={() => { navigate('/detail/' + props.task.id) }} />
      </li>
    </div>
  );
}