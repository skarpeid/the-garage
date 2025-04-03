import React from 'react';
import { X } from 'lucide-react';

interface NotificationItemProps {
  message: string;
  taskName: string;
  hasViewButton?: boolean;
  onClose?: () => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  message,
  taskName,
  hasViewButton = false,
  onClose,
}) => (
  <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50">
    <div className="flex-1">
      <p className="text-gray-900">
        {message} "<span className="font-medium">{taskName}</span>"
      </p>
    </div>
    <div className="flex items-center gap-2 ml-4">
      {hasViewButton && (
        <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
          View
        </button>
      )}
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      )}
    </div>
  </div>
);

interface NotificationProps {
  notifications: Array<{
    id: string;
    message: string;
    taskName: string;
    hasViewButton?: boolean;
  }>;
  onClose?: (id: string) => void;
  onClearAll?: () => void;
}

export const Notification: React.FC<NotificationProps> = ({
  notifications,
  onClose,
  onClearAll,
}) => {
  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 divide-y divide-gray-200">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-2xl font-bold">Notification</h2>
        <button
          onClick={() => onClose && onClose('close-button')}
          className="p-1 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
      </div>
      <div className="max-h-[400px] overflow-y-auto divide-y divide-gray-200">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            message={notification.message}
            taskName={notification.taskName}
            hasViewButton={notification.hasViewButton}
            onClose={() => onClose && onClose(notification.id)}
          />
        ))}
      </div>
      {notifications.length > 0 && (
        <div className="p-3 flex justify-center bg-gray-50">
          <button
            onClick={onClearAll}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <span className="text-sm">Clear all</span>
          </button>
        </div>
      )}
    </div>
  );
}; 