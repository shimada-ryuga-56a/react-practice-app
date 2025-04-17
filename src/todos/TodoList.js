import TodoItem from './TodoItem.js';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

function TodoList ({ todos, onDelete, onStartEdit, editingIndex, editingText, onEditingChange, onUpdate, onDragEnd }) {
  return (
    <DndContext onDragEnd={onDragEnd}>
      <SortableContext items={todos} strategy={verticalListSortingStrategy}>
        <div className="todo_list">
          <h2>Todoリスト</h2>
          <ul>
            {todos.map((todo, index) => (
              <TodoItem key={index} id={`${index}`} index={index} todo={todo} onDelete={onDelete} onStartEdit={onStartEdit} editingIndex={editingIndex} editingText={editingText} onEditingChange={onEditingChange} onUpdate={onUpdate} />
            ))}
          </ul>
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default TodoList