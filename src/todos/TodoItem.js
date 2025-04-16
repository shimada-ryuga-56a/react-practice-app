import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function TodoItem({
  id,
  todo,
  index,
  onDelete,
  onStartEdit,
  editingIndex,
  editingText,
  onEditingChange,
  onUpdate }) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isEditing = (editingIndex === index);

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {isEditing? (
        <>
          <input
            className="todo_input"
            type="text"
            value={editingText}
            onChange={onEditingChange}>
          </input>
          <button
            className="info_button"
            onClick={() => onUpdate()}>
            更新
          </button>
        </>
      ) : (
        <>
          {todo}
          <button
            className="info_button"
            onClick={() => onStartEdit(index)}>
            編集
          </button>
          <button
            className="delete_button"
            onClick={() => onDelete(index)}>
            削除
          </button>
        </>)
      }
    </li>
  )
}

export default TodoItem;