import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import UserCard from '../UserCard';
import { UserType } from '../../types/UserType';

interface DraggableUserProps {
  user: UserType;
}

const DraggableUser: React.FC<DraggableUserProps> = ({ user }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <UserCard user={user} />
    </div>
  );
};

export default DraggableUser;
